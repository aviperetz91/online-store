import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../config/consts';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import axios from 'axios';
import SpinnerComponent from '../components/SpinnerComponent';
import Rating from '@mui/material/Rating';

const ProductDetailsScreen = () => {
    const { i18n, t } = useTranslation();
    const lang = i18n.language;
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/api/products/${id}`);
            setProduct(data);
        } catch (error) {
            let message = error.message;
            if (error.response && error.response.data.message) {
                message = error.response.data.message;
            }
            setError(message);
        }
    };

    if (error) {
        return <h1 className='text-center mt-5'>{error}</h1>;
    } else if (!product) {
        return <SpinnerComponent height={'82vh'} />;
    } else {
        const { image, title, price, rating, description, quantity, sold } = product;
        return (
            <>
                <div className='container'>
                    <Link to={'/shop'} className='btn my-3'>
                        {lang === 'he' ? (
                            <HiOutlineArrowNarrowRight size={35} color='black' />
                        ) : (
                            <HiOutlineArrowNarrowLeft size={35} color='black' />
                        )}
                    </Link>
                    <div className='row'>
                        <div className='col-md-5 mb-3'>
                            <div className='d-flex justify-content-center'>
                                <img className='img-fluid d-block mx-auto' src={image} alt='...' />{' '}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <ul className='list-group-flush'>
                                <li className='list-group-item'>
                                    <h3>{title}</h3>
                                </li>
                                <li className='list-group-item'>
                                    <Rating name='rating' value={rating} readOnly size='large' />
                                </li>
                                <li className='list-group-item text-muted'>{description}</li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <ul className='list-group px-5 px-sm-0 mb-3'>
                                <li className='list-group-item py-3'>
                                    <div className='row'>
                                        <div className='col'>{`${t('sold-label')}: `}</div>
                                        <div className='col'>{sold}</div>
                                    </div>
                                </li>
                                <li className='list-group-item py-3'>
                                    <div className='row'>
                                        <div className='col'>{`${t('quantity-label')}: `}</div>
                                        <div className='col'>{quantity ? quantity : `${t('out-of-stock')}`}</div>
                                    </div>
                                </li>
                                <li className='list-group-item py-3'>
                                    <div className='row'>
                                        <div className='col'>{`${t('price-label')}: `}</div>
                                        <div className='col fw-bold'>{`${t('price-symbol')}${price}`}</div>
                                    </div>
                                </li>
                                <li className='list-group-item py-3 d-flex justify-content-center'>
                                    <button className='btn btn-primary btn-xl'>{t('add-to-cart')}</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ProductDetailsScreen;
