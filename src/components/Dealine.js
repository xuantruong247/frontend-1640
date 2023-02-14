import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Dealine() {
    return (
        <div className='container'>
            <h1>Upload Your File Here</h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Select Your File</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-content-center">
                    Button
                </button>
            </Form>
        </div>
    )
}
