import { RotatingLines } from  'react-loader-spinner'

export function SpinerLoading () {
  return(
    <>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="500"
        visible={true}
      />
    </>
  );
}
