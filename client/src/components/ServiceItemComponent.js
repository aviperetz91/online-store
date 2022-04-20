import '../styles/servicesStyle.scss';

const ServiceItemComponent = ({ icon, name, description }) => {
    return (
        <div className='col-md-4 services'>
            <div className='service-item-circle bg-primary'>
                <span className='fa-stack fa-4x'>{icon}</span>
            </div>
            <h4 className='my-3'>{name}</h4>
            <p className='text-muted'>{description}</p>
        </div>
    );
};

export default ServiceItemComponent;
