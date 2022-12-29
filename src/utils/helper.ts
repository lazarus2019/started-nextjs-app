import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { toast } from 'react-toastify';

dayjs.extend(timezone);
dayjs.extend(utc);

export const DATE_FORMAT = 'DD MM YYYY';

export const convertStringToShortDate = (date: string) =>
  dayjs(date).format(DATE_FORMAT);

export const toastOptions = {
  pauseOnHover: true,
  autoClose: 2000,
};

export const showNotify = (
  mess,
  variant = 'success',
  options = toastOptions
) => {
  switch (variant) {
    case 'success':
      return toast.success(mess, options);
    case 'warn':
      return toast.warn(mess, options);
    case 'info':
      return toast.info(mess, options);
    default:
      return toast.success(mess, options);
  }
};
