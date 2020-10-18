import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import axios from 'axios'
import 'App.css'

const App: React.FC = () =>
{
  const [point, setpoint] = useState(0)
  const [grade, setGrade] = useState('')

  function handlePoint(e: React.ChangeEvent<HTMLInputElement>)
  {
    let point = e.target.value.replace(/[.]/g, '')
    let pointInt = parseInt(point)

    if (point.length > 0)
    {
      if (pointInt > 100)
      {
        setpoint(100)
      }
      else
      {
        setpoint(pointInt)
      }
    }
    else
    {
      setpoint(0)
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>)
  {
    e.preventDefault();

    axios.get('http://localhost:5000/', { params: { point: point } }).then((res) =>
    {
      setGrade(res.data)
    })
      .catch((error) =>
      {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <div className="container">
        <h1>กรุณากรอกตัวเลข</h1>
        <form className="input-group mb-3" onSubmit={onSubmit}>
          <input
            value={point}
            defaultValue={0}
            onChange={handlePoint}
            type="text"
            className="form-control"
            placeholder="กรอกคะแนน"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary btn-outline-secondary"
              type="submit"
              style={{ color: 'white' }}
            >
              คำนวณเกรด
            </button>
          </div>
        </form>
        <div className="container-grade">
          {
            (grade.length > 0) &&
            <h1>เกรดที่คุณได้คือ {grade}</h1>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
