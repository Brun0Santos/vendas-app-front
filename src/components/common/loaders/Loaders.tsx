import { LinearProgress } from '@mui/material';

interface LoaderProps {
  isRender: boolean;
}

export default function Loaders({ isRender }: LoaderProps) {
  if (!isRender) {
    return <></>;
  }

  return <LinearProgress color="secondary" />;
}
