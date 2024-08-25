import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DataContext } from '../useContext/DataContext';

const EIForm = ({ index, style, defaultValues }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues });
    const { Data, setData, setShowAlert } = useContext(DataContext);

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    const submitHandler = (data) => {
        const processedData = {
            ...data,
            eiAmount: parseFloat(data.eiAmount), 
        };

        if (index !== undefined && index >= 0) {
            const updatedData = Data.map((item, idx) =>
                idx === index ? { ...processedData } : item
            );
            setData(updatedData);
        } else {
            setData([...Data, processedData]);
        }

        setShowAlert(true);
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className='form-elements'>
                <div>
                    <label htmlFor="eiName">Enter name:</label>
                    <div className="input-group">
                        <input
                            {...register("eiName", {
                                required: 'Enter a name',
                            })}
                            type="text"
                            className="form-control"
                            aria-label="Text input with dropdown button"
                            id="eiName"
                            name="eiName"
                        />
                        <select {...register("eiType")} name="eiType" id="eiType" className="form-select" aria-label="Default select example">
                            <option value="Groceries">Groceries</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Savings">Savings</option>
                        </select>
                    </div>
                    {errors.eiName && (<div className='validation-message'>{errors.eiName.message}</div>)}
                </div>

                <div>
                    <label htmlFor="eiAmount">Enter amount (use - or +):</label>
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input
                            {...register("eiAmount", {
                                required: 'Enter an amount',
                                validate: {
                                    isNumber: (value) => !isNaN(value) || 'Please enter a valid amount',
                                },
                            })}
                            type="text"
                            className="form-control"
                            id="eiAmount"
                            name="eiAmount"
                            aria-label="Amount (to the nearest dollar)"
                        />
                    </div>
                    {errors.eiAmount && (<div className='validation-message'>{errors.eiAmount.message}</div>)}
                </div>
            </div>

            <button className={`btn ${style}`} type='submit'>Add</button>
        </form>
    );
}

export default EIForm;

