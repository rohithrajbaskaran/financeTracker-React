import React, { useContext, useState } from 'react';
import { DataContext } from '../useContext/DataContext';
import EIForm from './EIForm';

const EIList = () => {
  const { Data, setData } = useContext(DataContext);
  const [modalProps, setModalProps] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const expenses = Data
    .map((data, index) => ({ ...data, originalIndex: index }))
    .filter((data) => data.eiAmount < 0);

  const income = Data
    .map((data, index) => ({ ...data, originalIndex: index }))
    .filter((data) => data.eiAmount > 0);

  const removeElement = (index) => {
    const filteredData = Data.filter((_, i) => i !== index);
    setData(filteredData);
  };

  const openModalForEdit = (index) => {
    const itemToEdit = Data[index];
    setModalProps({
        index: index,
        style: 'btn btn-outline-dark',
        defaultValues: itemToEdit
    });
    setShowModal(true);
  };

  return (
    <div className='flex-row'>
      <div>
        <h1 className='heading2'>Expenses</h1>
        <div className='table-container'>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Expense</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((data, index) => (
                <React.Fragment key={data.originalIndex}>
                  <tr className="align-middle">
                    <th>{index + 1}</th>
                    <td>{data.eiName}</td>
                    <td>{data.eiType}</td>
                    <td>${data.eiAmount * -1}</td>
                    <td className='edit-button'>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => openModalForEdit(data.originalIndex)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>

                      {showModal && modalProps && (
                        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Item</h1>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <EIForm 
                                  index={modalProps.index} 
                                  style={modalProps.style} 
                                  defaultValues={modalProps.defaultValues}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeElement(data.originalIndex)}
                      >
                        <i className="bi bi-trash3"></i>
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h1 className='heading2'>Income</h1>
        <div className='table-container'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Income</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {income.map((data, index) => (
                <React.Fragment key={data.originalIndex}>
                  <tr className="align-middle">
                    <th>{index + 1}</th>
                    <td>{data.eiName}</td>
                    <td>{data.eiType}</td>
                    <td>${data.eiAmount}</td>
                    <td className='edit-button'>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => openModalForEdit(data.originalIndex)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>

                      {showModal && modalProps && (
                        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Item</h1>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <EIForm 
                                  index={modalProps.index} 
                                  style={modalProps.style} 
                                  defaultValues={modalProps.defaultValues}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeElement(data.originalIndex)}
                      >
                        <i className="bi bi-trash3"></i>
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EIList;

