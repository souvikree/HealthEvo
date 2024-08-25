import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Rating, Button, TextField } from '@mui/material';

const RatingFeedback: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      rating: 0,
      feedback: '',
    },
    validationSchema: Yup.object({
      rating: Yup.number().min(1, 'Rating is required').required('Required'),
      feedback: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="rating-feedback p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Rate Your Consultation</h2>
      <Rating
        name="rating"
        value={formik.values.rating}
        onChange={(event, newValue) => formik.setFieldValue('rating', newValue)}
      />
      <TextField
        label="Feedback"
        name="feedback"
        multiline
        rows={4}
        value={formik.values.feedback}
        onChange={formik.handleChange}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">Submit Feedback</Button>
    </form>
  );
};

export default RatingFeedback;
