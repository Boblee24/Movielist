import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Movieform2 = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  const schema = yup.object().shape({
    moviename: yup.string().required("Please fill this field"),
    duration: yup.string().required("Please fill this field"),
    rating: yup.number().integer().positive().max(100).required("hello wordd", null),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
          <input type="submit"/>
        </form>
      </div>
    </section>
  );
};

export default Movieform2;
