import React, { useState } from "react";
import EventContainer from "../component/EventContainer";
import Hero from "../assets/Birthday.png";

const Event = () => {
  const [formData, updateFormData] = useState([]);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <EventContainer>
        {formData.length > 0 ? (
          <>
            <section>
              {formData.map((item) => {
                return (
                  <>
                    <div className="events-details">
                      <h1 className="heading event-heading">
                        {item.eventName}
                      </h1>
                      <p className="hosted-title">Hosted By {item.hostName}</p>
                      <div className="flex event-detail-container">
                        📅{" "}
                        <div className="event-detail">
                          {item.startTime} <br />
                          <span className="event-end-date">{item.endTime}</span>
                        </div>
                      </div>
                      <div className="flex event-detail-container">
                        📍{" "}
                        <div className="event-detail">
                          Street name
                          <br />
                          <span className="event-end-date">
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </section>
          </>
        ) : (
          <>
            <section className="form-field">
              <form action="" onSubmit={handleSubmit}>
                <p className="input-title text-text-primary">
                  🎉 My event is called
                </p>
                <input
                  name="eventName"
                  maxlength="30"
                  className="input-field"
                  onChange={handleChange}
                ></input>
                <p className="input-title text-text-primary">
                  🙋‍♂️ It's organise by
                </p>
                <input
                  name="hostName"
                  maxlength="30"
                  className="input-field"
                  onChange={handleChange}
                ></input>
                <p className="input-title text-text-primary">📆 It starts at</p>
                <input
                  type="date"
                  name="startTime"
                  maxlength="30"
                  className="input-field"
                  onChange={handleChange}
                ></input>
                <p className="input-title text-text-primary">🏁 It ends at</p>
                <input
                  name="endTime"
                  type="date"
                  maxlength="30"
                  className="input-field"
                  onChange={handleChange}
                ></input>
                <p className="input-title text-text-primary">
                  📍 It's happining at
                </p>
                <input
                  name="location"
                  maxlength="30"
                  className="input-field"
                  onChange={handleChange}
                ></input>
                <p className="input-title text-text-primary">
                  🔗 Add event photo
                </p>
                <input
                  name="eventPhoto"
                  maxlength="30"
                  className="input-field"
                  onChange={handleChange}
                ></input>
                <button className="button">Submit</button>
              </form>
            </section>
          </>
        )}

        <img src={Hero} alt="hero-image" className="cake-image" />
      </EventContainer>
    </div>
  );
};

export default Event;

{
}
