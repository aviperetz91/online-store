const GalleryItemComponent = ({ id, name, summary, image }) => {
    return (
        <div className='col-lg-4 col-sm-6 mb-4'>
            <div className='portfolio-item pointer'>
                <a className='portfolio-link' data-bs-toggle='modal' data-bs-target={`#${id}`}>
                    <div className='portfolio-hover'>
                        <div className='portfolio-hover-content'>
                            <i className='fas fa-plus fa-3x'></i>
                        </div>
                    </div>
                    <img className='img-fluid' src={image} alt='...' />
                </a>
                <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>{name}</div>
                    <div className='portfolio-caption-subheading text-muted'>{summary}</div>
                </div>
            </div>
        </div>
    );
};

export default GalleryItemComponent;