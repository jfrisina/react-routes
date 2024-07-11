import { useParams } from 'react-router-dom'

const Welcome = () => {
    const params = useParams()
  return (
    <div>
        Welcome {params.firstname} {params.lastname} to our website!
            

    </div>
  )
}

export default Welcome