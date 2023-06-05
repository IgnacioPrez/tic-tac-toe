import { Box } from "../components-with-styled"

const Square = ({value,update}) => {

  return (
    <Box color={value} onClick={update}>
        {value}
    </Box>
  )
}

export default Square