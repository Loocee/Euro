import React from "react";

export function TopLeft(props) {
  return (
    <div>
      <h3>Shipping Method</h3>
      <div>
        <div>
          <h4>{props.text}</h4>
          <p>We ship immediately take between 7 - 8 working days</p>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
          />
        </div>
      </div>
    </div>
  );
}

export function Details() {
  return (
    <div>
      <h3>Personal Details</h3>
      <form>
        <div>
          <div>
            <label htmlFor="input-fname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="input-fname"
              className="form-control"
              placeholder="Joseph"
              required
            />
          </div>
          <div>
            <label htmlFor="input-sname" className="form-label">
              Surname
            </label>
            <input
              type="text"
              id="input-sname"
              className="form-control"
              placeholder="Peter"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="input-state" className="form-label">
            State
          </label>
          <input
            type="text"
            id="input-staate"
            className="form-control"
            placeholder="Lagos State"
            required
          />
        </div>
        <div>
          <label htmlFor="input-number" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            id="input-number"
            className="form-control"
            pattern="[0-9]{11}"
            placeholder="07013213455"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="joanqe@gmail.com"
          />
        </div>
      </form>
    </div>
  );
}

export function Payment() {
  return (
    <div>
      <h3>Payment</h3>
      <div>
        <button>
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
          />
          Card
        </button>
        <button>
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
          />
          Bank Transfer
        </button>
      </div>
      <form>
        <div>
          <label htmlFor="input-cardname" className="form-label">
            Card Holder Name
          </label>
          <input
            type="text"
            id="input-cardname"
            className="form-control"
            placeholder="Joseph"
            required
          />
        </div>
        <div>
          <label htmlFor="input-cardnum" className="form-label">
            Card Holder Number
          </label>
          <input
            type="text"
            id="input-cardnum"
            className="form-control"
            pattern="[0-9]{12}"
            placeholder="674xxx39xx13"
            required
          />
        </div>
        <div>
          <div>
            <label htmlFor="input-date" className="form-label">
              Expiration date
            </label>
            <input
              type="month"
              id="input-date"
              className="form-control"
              required
            />
          </div>
          <div>
            <label htmlFor="input-cvv" className="form-label">
              CVV
            </label>
            <input
              type="text"
              id="input-cvv"
              className="form-control"
              pattern="[0-9]{3}"
              placeholder="070"
              required
            />
          </div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" />
          <label class="form-check-label">
            Save my details for future purchases
          </label>
        </div>
      </form>
    </div>
  );
}
