import React from 'react';

const Registration = () => {
    return (
        <div className='container py-5 vheight'>
          <div className="row">
            <div className="col-7 m-auto">
              <form>
            <div class="form-group mb-2 row">
              <label for="name" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="name" placeholder="Name" />
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
                <h2 className='d-flex text-left'>Select Your Courses</h2>
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
              </div>
            </div>
            <div class="form-group mb-2 row">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">Registration</button>
              </div>
            </div>
          </form>
            </div>
          </div>
        </div>
    );
};

export default Registration;