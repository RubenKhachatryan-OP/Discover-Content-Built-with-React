import { BilledCast, CastLi } from "./styles"

const CastInfo = ({ cast }) => {
  return (
    <BilledCast>
      {cast.map((e) => (
        <CastLi key={e.name}>
          <p>{e.name}</p>
          <p>{e.casted}</p>
        </CastLi>
      ))}
    </BilledCast>
  )
}

export default CastInfo