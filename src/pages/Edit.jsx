import React from 'react';
import Navbar from '../components/Navbar';
import EIList from '../components/EIList';
import { useContext } from 'react';

import { DataContextProvider, DataContext } from '../useContext/DataContext';
import EIForm from '../components/EIForm';

const Edit = () => {

  const { showAlert, setShowAlert, totalBalance } = useContext(DataContext);

  return (
    <>
      <Navbar />
      {showAlert && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success</strong> You have successfully added items to your list.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)}></button>
                </div>
      )}
      
      <main className='main-edit'>
        <h1 className="heading3">Income/Expense List</h1>
        
        <div className='eiData'>
          <div className='eiInput'>
              <h1 className="heading1">Add Expense or Income</h1>
              <EIForm style='btn-outline-light'></EIForm>
              <h1 className={`${totalBalance > 0 ? 'alert alert-success' : 'alert alert-danger'} total-balance`}>Total balance: {totalBalance}</h1>
          </div>

          <EIList />

        </div>
      </main>
    </>
  );
};

export default Edit;
