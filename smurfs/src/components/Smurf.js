import { useContext } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const Smurf = props => {
    const smurf = useContext(SmurfContext);
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{smurf.name}</CardTitle>
                    <CardSubtitle>{smurf.age} years old, {smurf.height} tall</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
};

export default Smurf;