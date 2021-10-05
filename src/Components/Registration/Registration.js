import React from 'react';
import { useHistory } from 'react-router';




const Registration = () => {

  const history = useHistory();
const handleRegistration = ()=>{
  history.push('/regisdone');
}

    return (
     
        <div className='container py-5 vheight'>
          <div className="row">
            <div className="col-7 m-auto">
              <form>
                
            <div class="form-group mb-2 row">
              <label for="name" class="col-sm-2 col-form-label">Your Name</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="name" placeholder="Type your name" />
              </div>
            </div>
            <div class="form-group mb-2 row">
              <label for="phonenumber" class="col-sm-2 col-form-label">Phone Number</label>
              <div class="col-sm-10">
                <input type="phone" class="form-control" id="phonenumber" placeholder="Phone number" />
              </div>
            </div>
            <div class="form-group mb-2 row">
              <div class="col-sm-2"></div>
              <div class="col-sm-10">
                <h2 className='d-flex text-left'>Select Your Courses Below:</h2>
                <div class="form-check d-flex">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label ps-1" for="gridCheck1">
                  Digital Marketing
                  </label>
                </div>
                <div class="form-check d-flex">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label ps-1" for="gridCheck1">
                  Free Hand Writing
                  </label>
                </div>
                <div class="form-check d-flex">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label ps-1" for="gridCheck1">
                  Spoken English
                  </label>
                </div>
                <div class="form-check d-flex">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label ps-1" for="gridCheck1">
                  BCS Preli
                  </label>
                </div>
                <div class="form-check d-flex">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label ps-1" for="gridCheck1">
                  BCS Written
                  </label>
                </div>
                <div class="form-check d-flex">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label ps-1" for="gridCheck1">
                  Bank Job Preparation
                  </label>
                </div>
                <div class="form-check d-flex">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label ps-1" for="gridCheck1">
                  Language & Communication Course
                  </label>
                </div>
                <div class="form-check d-flex">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label ps-1" for="gridCheck1">
                  Skill Development
                  </label>
                </div>
                <div class="form-check d-flex">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label ps-1" for="gridCheck1">
                  Basic Math
                  </label>
                </div>
                <div class="form-check d-flex">
                  <input class="form-check-input" type="checkbox" id="gridCheck1" />
                  <label class="form-check-label ps-1" for="gridCheck1">
                  Beautiful Hand Writing
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group mb-2 row">
              <div class="col-sm-10">
                <button onClick={handleRegistration} type="submit" class="btn btn-primary">Registration</button>
              </div>
            </div>
          </form>
            </div>
          </div>
        </div>
    );
};

export default Registration;