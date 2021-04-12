import React from 'react';
import Card from 'react-bootstrap/Card';
import BookingForm from '../BookingForm/BookingForm';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
      }
    return (
        <div className="col-md-4 text-center mb-5">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>
                        <h5 style={{color:'#1cc7c1'}}>{booking.subject}</h5>
                    </Card.Title>
                    <Card.Subtitle className="mb-2">
                        <h6 style={{fontSize:'14px'}}>{booking.timeRange}</h6>
                    </Card.Subtitle>
                    <Card.Text>
                        <p style={{fontSize:'11px'}} className="text-secondary"><small>{booking.space} SPACES AVAILABLE</small></p>
                    </Card.Text>
                    <button onClick={openModal} style={{fontSize:'11px', fontWeight:'bold'}} className="btn btn-primary">BOOK APPOINTMENT</button>
                    <BookingForm modalIsOpen={modalIsOpen} booking={booking} date={date} closeModal={closeModal}></BookingForm>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookingCard;