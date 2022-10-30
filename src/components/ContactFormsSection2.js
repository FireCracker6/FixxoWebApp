import React from 'react'
import { useState } from 'react'

function ContactFormsSection2() {


    const [initFormValues, setInitFormValues] = useState ({name: ``, email: ``, comment: ``})
    const [contactForm, setContactForm] = useState (initFormValues)

    const [formErrors, setFormErrors] = useState({})
    const [canSubmit, setCanSubmit] = useState(false)
   

 

    const validate = (e, contactForm = null) => {

        if (e.type === 'submit') {
            const errors = {}

            errors.name = validate_name(contactForm.name)
            errors.email = validate_email(contactForm.email)
            errors.comment = validate_comment(contactForm.comment)
            return errors
        }

        else {
        const {id, value} = e.target

        switch(id) {
            case 'name':
                return validate_name(value)
 
            case 'email':
                return validate_email(value)
 
            case 'comment':
                return validate_comment(value)
             
    
        }

    }
     

      return validate
    }

    const handleChange = (e) => {
        const {id, value} = e.target 
        setContactForm({...contactForm, [id]: value })
        setFormErrors({...formErrors, [id]: validate(e) })
    }


 
       
        const handleSubmit = (e) => {

            e.preventDefault();
            setFormErrors(validate(e, contactForm))

            if (formErrors.name === null || formErrors.email === null || formErrors.comment === null) {
                setCanSubmit(true)
                setContactForm(initFormValues)
                console.log("saasdasd")
                
            }
           setContactForm(initFormValues)

        }

        const handleKeyUp = (e) => {

            const {id, value} = e.target 

        setFormErrors({...formErrors, [id]: validate(e) })
        }

        const validate_name = (value) => {
            if (!value)
                return 'A name is required'
            else if (value.length < 5)
                return 'Must be a valid name' 
            else 
            return null
        }
        const validate_email = (value) => {
            const regex_email =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

            if (!value)
                return 'An email is required'
           else if (!regex_email.test(value)) 
            return 'Must be a valid email address'
            else return null 
        }
        const validate_comment = (value) => {
            if (!value)
            return 'A comment is required'
        else if (value.length < 5)
            return 'Must be a valid comment' 
        }
            
      
       
    
  return (

    
    
    <section className="form-comments">
        
    

       <div className="forms-input">
           <div className="container">
         
              {
                canSubmit ? (<div className='d-flex justify-content-center align-items-center' style={{height: '400px'}} ><div className='header'><h2>Thank you for your comment! {contactForm.name}</h2></div></div>)
                : 
                (<>
                 <form onSubmit={handleSubmit} noValidate>
                    <div className="header">
                    <h2>Come in Contact with Us </h2>
              
                    </div>
                <div className="item-1">
                   
                  <input  id="name" className={ (formErrors.name) ?  'error': '' }  type="text"  value={contactForm.name}  onChange={handleChange}  onKeyUp={handleKeyUp}   placeholder="Your Name"   />                 
                    
                    <div className="errorMessage"> {formErrors.name} </div>
                </div>
                  
                <div className="item-2">
               
                    <input id='email' className={ (formErrors.email) ?  'error': '' }  type='email'   value={contactForm.email}   onChange={handleChange} onKeyUp={handleKeyUp}  placeholder='Your Mail' /> 
                    <div className='errorMessage'> {formErrors.email} </div>

                </div>
                <div className="item-3">
                      <textarea  className={ (formErrors.comment) ?  'error': '' }   placeholder="Comments"  value={contactForm.comment}  onChange={handleChange}  onKeyUp={handleKeyUp}  id="comment" rows="8"></textarea>
                        <div className='errorMessage'> {formErrors.comment} 
                        </div>
            
                      <div className="cart-red-buttons mt-4"><button type="submit"  className=" post-button">Post Comments</button>
                    </div> 
                </div>
             
       </form>
                </>)
              }
           </div>
       </div>

       
       </section>

       
  )

}

export default ContactFormsSection2