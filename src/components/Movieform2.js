import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Movieform2 = ({ addMovie }) => {
  const schema = yup.object().shape({
    moviename: yup.string().required("Please fill this field"),
    duration: yup
      .string()
      .test({
        name: "invalid Input",
        test: (value) => {
          // Custom validation logic
          const durationRegex = /^[0-9]+[hm]$/i; // Accepts formats like '2h' or '150m'
          return durationRegex.test(value);
        },
        message : "Please specify the input in this format 2.5h or 150m"
      },)
      .required("Please fill this field"),
    rating: yup
      .number()
      .integer()
      .positive()
      .max(100)
      .required("This field is required", null),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const convertMinutesToHours = (minutes) => {
    const hours = minutes / 60;
    return hours.toFixed(1) + ' Hrs';
  };
  const onSubmit = (data) => {
    let duration = data.duration;
    
    // Convert minutes to hours if needed
    if (duration.endsWith('m')) {
      const minutes = parseInt(duration, 10);
      duration = convertMinutesToHours(minutes);
    } else if(duration.endsWith('h')){
      duration = parseFloat(duration).toFixed(1) + 'Hrs'
    }
    addMovie({...data, duration});

    // console.log({ ...data, duration });
    // reset();
  };
  return (
    <section>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="layout-column">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Movie Name"
              {...register("moviename")}
            />
            <p className="error">{errors.moviename?.message} </p>
          </div>
          <div className="layout-column">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              type="number"
              id="ratings"
              placeholder="Rating"
              {...register("rating")}
            />
            <p className="error">{errors.rating?.message} </p>
          </div>
          <div className="layout-column">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              placeholder="Enter the duration in hours or ninutes"
              {...register("duration")}
            />
            <p className="error">{errors.duration?.message} </p>
          </div>
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Movieform2;
