// http://localhost:3000/isolated/testing/components/login-submission
import React from 'react'
import {Redirect} from '@reach/router'
import Login from './login'

function formSubmissionReducer(state, action) {
  switch (action.type) {
    case 'SUBMIT': {
      return {
        loading: true,
        success: false,
        errorMessage: null,
      }
    }
    case 'SUCCESS': {
      return {
        loading: false,
        success: true,
        errorMessage: null,
      }
    }
    case 'ERROR': {
      return {
        loading: false,
        success: false,
        errorMessage: action.e.message,
      }
    }
    default:
      throw new Error(`Unsupported type: ${action.type}`)
  }
}

function useFormSubmission({endpoint, data}) {
  const [state, dispatch] = React.useReducer(formSubmissionReducer, {
    loading: false,
    success: false,
    errorMessage: null,
  })

  const fetchBody = data ? JSON.stringify(data) : null

  React.useEffect(() => {
    if (fetchBody) {
      dispatch({type: 'SUBMIT'})
      window
        .fetch(endpoint, {
          method: 'POST',
          body: fetchBody,
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        })
        .then(
          () => dispatch({type: 'SUCCESS'}),
          e => dispatch({type: 'ERROR', error: e}),
        )
    }
  }, [fetchBody, endpoint])

  return state
}

function Spinner() {
  return '...'
}

function LoginSubmission() {
  const [formData, setFormData] = React.useState(null)
  const {loading, success, errorMessage} = useFormSubmission({
    endpoint: '/fake-endpoint',
    data: formData,
  })

  if (success) {
    return <Redirect to="/app" replace={false} noThrow />
  }

  return (
    <>
      <Login onSubmit={data => setFormData(data)} />
      {loading ? <Spinner /> : null}
      {errorMessage}
    </>
  )
}

export default LoginSubmission
