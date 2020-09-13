import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => {
      console.log('form- submitted', data);

    }

  console.log(watch("example"));

  return (
    <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
      <input name="example" defaultValue="test" ref={register} />
      
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder='name' />
      {errors.name && <span className='error'>Name is required</span>}
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder='email' />
      {errors.email && <span className='error'>email is required</span>}
      <input name="address1" ref={register({ required: true })} placeholder='address1'/>
      {errors.address1 && <span className='error'>address1 is required</span>}
      <input name="address2" ref={register({ required: true })} placeholder='address2-(opsonal)' />
      
      <input name="phone" ref={register({ required: true })} placeholder='Phone'/>
      {errors.phone && <span className='error'>Phone is required</span>}
      <input name="city" ref={register({ required: true })} placeholder='City'/>
      {errors.city && <span className='error'>City is required</span>}
      <input name="country" ref={register({ required: true })} placeholder='country'/>
      {errors.country && <span className='error'>Country is required</span>}
      <input name="ziep-code" ref={register({ required: true })} placeholder='ziep-code'/>
      {errors.ziepcode && <span className='error'>ziep code is required</span>}
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;