import { useState } from 'react';

export default function DatePicker() {
  const [startDate, setStartDate] = useState(
    new Date(),
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
}
