import React from 'react'

const Thead = ({ keys }: []) => {
  return (
    <thead className='table-dark'>
        <tr>
            {
                keys.map( key => (
                    <th 
                        key={key}
                        scope='col'>
                        {key.toUpperCase()}
                    </th>
                ))    
            }
            <th></th>
        </tr>
    </thead>
  )
}

export default Thead