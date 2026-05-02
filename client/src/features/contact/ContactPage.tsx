import { Typography } from "@mui/material";
import { Button, ButtonGroup } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { decrement, increment } from "./counterReducer";

// In a real app, use RootState from your store
// import { RootState } from '../../app/store';

// For this example, we'll use CounterState directly


export default function ContactPage() {
  const {data} = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <Typography variant="h2">
        Contact Page
      </Typography>
      <Typography variant="body1">
        The data is: {data}
      </Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(increment(1))} color="primary">
          Increment
        </Button>
        <Button onClick={() => dispatch(decrement(1))} color="secondary">
          Decrement
        </Button>
        <Button onClick={() => dispatch(increment(5))} color="success">
          Increment by 5
        </Button>
      </ButtonGroup>
    </>
  );
}