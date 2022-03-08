const ServiceItem = ({ icon, name, description }) => {
    return (
        <div class='col-md-4'>
            <div className='service-item-circle bg-primary'>
                <span class='fa-stack fa-4x'>{icon}</span>
            </div>
            <h4 class='my-3'>{name}</h4>
            <p class='text-muted'>{description}</p>
        </div>
    );
};

export default ServiceItem;
