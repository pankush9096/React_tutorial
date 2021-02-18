  import React from 'react'

  // Here we are creating an object with key as camelcase css style type and value as string
const heading = {
  fontSize: '72px',
  color: 'blue'
}

function Inline() {
  return (
      //Applying the object directly to style attricute of h1 tag
      // here error will be rendered as it has global scope with appStyles.css where as scuucess wont be rendered as it is defined as css module hwihc has local scope and is not imported here.

    <div>
        <h1 className='error'>Error</h1>
        {/* <h1 className={Styles.success}>Success</h1> */}
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline