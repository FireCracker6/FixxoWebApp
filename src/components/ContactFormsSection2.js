import React from 'react'
import { useState } from 'react'

function ContactFormsSection2() {
    const initFormValues = ({name: ``, email: ``, comments: ``})
    const [contactForm, setContactForm] = useState ({initFormValues})

    const [formErrors, setFormErrors] = useState({})
    const [canSubmit, setCanSubmit] = useState(false)
   

 

    const validate = (e, contactForm = null) => {

        if (e.type === 'submit') {
            const errors = {}

            errors.name = validate_name(contactForm.name)
            errors.email = validate_email(contactForm.email)
            errors.comment = validate_comment(contactForm.comments)
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
      /*   const errors = {}
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
 */
     
     
      /*   return errors; */

      return validate
    }

    const handleChange = (e) => {
        const {id, value} = e.target 
        setContactForm({...ContactFormsSection2, [id]: value })
        setFormErrors({...formErrors, [id]: validate(e) })
    }


 
       
        const handleSubmit = (e) => {

            e.preventDefault();
            setFormErrors(validate(e, contactForm))

            if (formErrors.name === null && formErrors.email === null && formErrors.comment === null) {
                setCanSubmit(true)
                setContactForm(initFormValues)
            }
           setContactForm(initFormValues)

        }

        const handleKeyUp = (e) => {

            const {id, value} = e.target 
            setFormErrors({...formErrors, [id]: value })
            console.log('key up triggered')
        }

        const validate_name = (value) => {
            if (!value)
                return 'A name is required'
            else if (value.length > 2)
                return 'Must be a valid name'
            else 
            return null
        }
        const validate_email = (value) => {
            const regex_email =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

            if (!value)
                return 'An email is required'
            else if (!regex_email.text(value))
            return 'Must be a valid email address'
            else return null
        }
        const validate_comment = (value) => {
            if (!value)
                return 'A comment is required'
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
                   
                    <input  id="name"  type="text" value={contactForm.name}  onChange={handleChange} placeholder="Your Name"  required />
                    <div className="errorMessage"> {formErrors.name} </div>
                </div>
                  
                <div className="item-2">
               
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
                </>)
              }
           </div>
       </div>

       
       </section>

       
  )

}

export default ContactFormsSection2