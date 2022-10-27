import React from 'react'
import { useState } from 'react'

function ContactFormsSection2() {
 
    const [contactForm, setContactForm] = useState ({name: ``, email: ``, comments: ``})

    const [formErrors, setFormErrors] = useState({})
    const [canSubmit, setCanSubmit] = useState(false)
    const [checkField, setCheckField] = useState(false)

 

    const validate = (values) => {
        const errors = {}
        const regex_email =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if (!values.name) {
            errors.name = "You must enter a name"
      
            
        }

        if (!values.email) {
            errors.email = "You must enter an email address"
          
        }
        else if (!regex_email.test(values.email))
        errors.email = "You must enter a valid email address (eg. name@domain.com)"
     
        if (!values.comments) {
            errors.comments = "You must write a comment"
        }
        else if (values.comments.length < 5)
        errors.comments = "Your comment must be longer than five characters. "

        if (Object.keys(errors).length === 0)
        setCanSubmit(true)
        else 
        setCanSubmit(false)

     
     
        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target 
        setContactForm({...contactForm, [id]: value })
    }




       
        const handleSubmit = (e) => {

            e.preventDefault();
            setFormErrors(validate(contactForm))

        }


            
      
       
    
  return (

    
    
    <section className="form-comments">
        
    

       <div className="forms-input">
           <div className="container">
         
              {
                canSubmit ? <div className='d-flex justify-content-center align-items-center' style={{height: '400px'}} ><div className='header'><h2>Thank you for your comment! {contactForm.name}</h2></div></div>
                : <>
                 <form onSubmit={handleSubmit} noValidate>
               <div className="header">
               <h2>Come in Contact with Us </h2>
              
           </div>
                <div className="item-1">
                    <label htmlFor="name" id='name-label' className='errorMessage' value={contactForm.name}>{formErrors.name}</label>
                    <input  id='name'  type='text' value={contactForm.name}  onChange={handleChange} placeholder='Your Name' required/>
                    <div className='errorMessage'> {formErrors.name} </div>
                </div>
                  
                <div className="item-2">
                <label htmlFor="email" id='email-label'></label>
                    <input id='email' type='email'  value={contactForm.email}  onChange={handleChange}  placeholder='Your Mail' />
                    <div className='errorMessage'> {formErrors.email} 
                    </div>

                </div>
                <div className="item-3">
                      <textarea  placeholder="Comments"value={contactForm.comments}   onChange={handleChange}  id="comments" rows="8"></textarea>
                        <div className='errorMessage'> {formErrors.comments} 
                        </div>
            
                      <div className="cart-red-buttons mt-4"><button type="submit"  className=" post-button">Post Comments</button>
                    </div> 
                </div>
             
       </form>
                </>
              }
           </div>
       </div>

       
       </section>

       
  )

}

export default ContactFormsSection2