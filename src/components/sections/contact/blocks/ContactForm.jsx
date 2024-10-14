import React from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const reason = [
    { value: "reason1", label: "reason1" },
    { value: "reason2", label: "reason2" },
];

const customStyles = {
    control: (baseStyles) => ({
        ...baseStyles,
        padding: '0.2rem',
        background: '#101010',
        color: '#fff',
        borderRadius: '0.5rem',
        borderWidth: '1px',
        borderColor: '#FBFDF5',
    }),
    option: (baseStyles, state) => ({
        ...baseStyles,
        background: state.isDisabled ? '#8f8f8f' : state.isSelected ? '#ff0037' : '#101010'
    }),
    menu: (baseStyles, state) => ({
        ...baseStyles,
        background: '#101010',
        color: '#fff',
        borderRadius: '0.5rem',
        borderWidth: '1px',
        borderColor: '#FBFDF5',
    }),

};

export default function FormContact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Submit form data here (e.g., send to server)
        reset(); // Reset form after submission
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='text-xs'>
            <div className='field-row flex gap-5 mb-6'>
                <div className='field-col flex-1'>
                    <label className='mb-2 inline-block' htmlFor="name">Name</label>
                    <input className='block font-light w-[100%] rounded-lg p-3 bg-transparent border border-white' type="text" {...register('name', { required: true })} />
                    {errors.name && <span className="error text-red pt-1 inline-block">Please enter your name.</span>}
                </div>
                <div className='field-col flex-1'>
                    <label className='mb-2 inline-block' htmlFor="email">Email</label>
                    <input className='block font-light w-[100%] rounded-lg p-3 bg-transparent border border-white' type="email" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                    {errors.email && errors.email.type === 'required' && <span className="error text-red pt-1 inline-block">Please enter your email address.</span>}
                    {errors.email && errors.email.type === 'pattern' && <span className="error text-red pt-1 inline-block">Please enter a valid email address.</span>}
                </div>
            </div>
            <div className='field-row flex gap-5 mb-6'>
                <div className='field-col flex-1'>
                    <Select className='w-100%'
                        options={reason}
                        styles={customStyles}
                    />
                </div>
            </div>
            <div className='field-row flex gap-5 mb-6'>
                <div className='field-col flex-1'>
                    <label className='mb-2 inline-block' htmlFor="subject">Subject</label>
                    <input className='block font-light w-[100%] rounded-lg p-3 bg-transparent border border-white' type="text" {...register('subject', { required: true })} />
                    {errors.subject && <span className="error text-red pt-1 inline-block">Please enter a subject.</span>}
                </div>
            </div>
            <div className='field-row flex gap-5 mb-8'>
                <div className='field-col flex-1'>
                    <label className='mb-2 inline-block' htmlFor="message">Message</label>
                    <textarea className='block font-light w-[100%] h-44 md:h-64 rounded-lg p-2 bg-transparent border border-white' type="text" {...register('message', { required: true })} />
                    {errors.message && <span className="error text-red pt-1 inline-block">Please enter a message.</span>}
                </div>
            </div>
            <div className='field-row flex justify-end'>
                <div className='field-col submit'>
                    <input className='bg-red py-3 px-14 mb-2 rounded-md' type="submit" value="Submit" />
                </div>
            </div>
        </form>
    );
}