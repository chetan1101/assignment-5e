import { Formik, Form, Field, FieldArray } from 'formik';
import RenderList from './RenderList';

const FileInput = (props) => {
  return <input className="form-control" type="file" {...props} />
}
const TextInput = (props) => {
  return <input className="form-control" type="text" {...props} />
}
const NumInput = (props) => {
  return <input className="form-control" type="number" {...props} />
}
const DateInput = (props) => {
  return <input className="form-control" type="date" {...props} />
}
const App = () => {


  return (
    <div className="container">
      <h1>ITEM LIST</h1>
      <Formik
        initialValues={{ item: [""] }}
        onSubmit={values =>
          localStorage.setItem("itemList", JSON.stringify(values.item))
        }
        render={({ values }) => (
          <> 
            <Form>
              <FieldArray
                name="item"
                render={arrayHelpers =>
                  <div>
                    {values.item && values.item.length > 0 ?
                      values.item.map((Item, index) =>
                        <div key={index}>
                          <h6>List item:</h6>
                          <table>
                            <tr>
                              <td>
                                <Field id="file" placeholder="Image" as={FileInput} name={`item[${index}].img`} required/>
                              </td>
                              <td>
                                <Field placeholder="Title" as={TextInput} name={`item.${index}.title`} required/>
                              </td>
                              <td>
                                <Field placeholder="Description" as={TextInput} name={`item.${index}.description`} required/>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Field placeholder="Qty" as={NumInput} name={`item.${index}.qty`} required/>
                              </td>
                              <td>
                                <Field placeholder="Price" as={NumInput} name={`item.${index}.price`} required/>
                              </td>
                              <td>
                                <Field placeholder="Date" as={DateInput} name={`item.${index}.date`} required/>
                              </td>
                            </tr>
                          </table>
                        </div>
                      ) : null
                    }
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary" type="submit">Submit</button>
                      <button className="btn btn-primary" type="button" onClick={() => arrayHelpers.push({})}> + </button>
                    </div>
                  </div>
                }
              />
            </Form>
            <RenderList />
          </>
        )}
      />
    </div>
  )
};

export default App;