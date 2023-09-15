import React from 'react'
import MainItem from '../../components/mainItem/MainItem'
import mainImage from '../../image/main-banner.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import './mainPage.scss'
import Icons from '../../utils/icons/Icons';
import camer from '../../image/Camers/photo.jpg'

import photo1 from '../../image/gallery/photo1.jpg'
import photo2 from '../../image/gallery/photo2.jpg'
import photo3 from '../../image/gallery/photo3.jpg'
import photo4 from '../../image/gallery/photo4.jpg'
import photo5 from '../../image/gallery/photo5.jpg'

import EarnItem from '../../components/earnItem/EarnItem';

import ph1 from '../../image/news/photo1.jpg'
import ph2 from '../../image/news/photo2.jpg'
import ph3 from '../../image/news/photo3.jpg'

import MapItem from '../../components/mapItem/MapItem';



const MainPage = () => {
    return (
        <div className='main'>
            <div className='main__image'>
                <img src={mainImage} alt="MainImg" />
            </div>
            <div className='main__info info'>
                <div className='container'>
                    <ul className='info__list'>
                        <MainItem name='list' text='Самый большой выбор техники' size='32' />
                        <MainItem name='time' text='Быстрое оформление заказа' size='32' />
                        <MainItem name='placeholder' text='Можно забрать заказв&nbsp;пункте выдачи' size='32' />
                        <MainItem name='product' text='Доставка в любуюточку Москвы' size='32' />
                        <MainItem name='cart' text='Оплата картой и наличными' size='32' />
                    </ul>
                </div>
            </div>
            <div className='main__product product'>
                <h2 className='product__title title'><span>Популярные</span> товары</h2>
                <div className='product__swiper'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        simulateTouch={false}
                        className="mySwiper">
                        <SwiperSlide className='product__case'>
                            <button className='product__compare'>
                                <Icons
                                    name='compare'
                                    size='20' />
                            </button>
                            <button className='product__star'>
                                <Icons
                                    name='star'
                                    size='20' />
                            </button>
                            <div className='product__camera'>
                                <img src={camer} alt="Camera" />
                                <h3 className='product__name'>PowerShot SX620 HS</h3>
                                <p className='product__model'>Canon</p>
                            </div>
                            <ul className='product__list'>
                                <li className='product__item'>
                                    <div className='product__price'>630&nbsp;Р</div>
                                    <div className='product__description'>Будний</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>750&nbsp;Р</div>
                                    <div className='product__description'>Выходной</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>4 380&nbsp;Р</div>
                                    <div className='product__description'>Неделя</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>12 250&nbsp;Р</div>
                                    <div className='product__description'>Месяц</div>
                                </li>
                            </ul>
                            <div className='product__btn'>
                                <Link className='product__info' to={':id'}>Подробнее</Link>
                                <button className='product__basket basket'>
                                    <div className='basket__case'>
                                        <Icons
                                            name='shop'
                                            size='16' />
                                        <p className='basket__text'>В корзину</p>
                                    </div>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='product__case'>
                            <button className='product__compare'>
                                <Icons
                                    name='compare'
                                    size='20' />
                            </button>
                            <button className='product__star'>
                                <Icons
                                    name='star'
                                    size='20' />
                            </button>
                            <div className='product__camera'>
                                <img src={camer} alt="Camera" />
                                <h3 className='product__name'>PowerShot SX620 HS</h3>
                                <p className='product__model'>Canon</p>
                            </div>
                            <ul className='product__list'>
                                <li className='product__item'>
                                    <div className='product__price'>630&nbsp;Р</div>
                                    <div className='product__description'>Будний</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>750&nbsp;Р</div>
                                    <div className='product__description'>Выходной</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>4 380&nbsp;Р</div>
                                    <div className='product__description'>Неделя</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>12 250&nbsp;Р</div>
                                    <div className='product__description'>Месяц</div>
                                </li>
                            </ul>
                            <div className='product__btn'>
                                <Link className='product__info' to={':id'}>Подробнее</Link>
                                <button className='product__basket basket'>
                                    <div className='basket__case'>
                                        <Icons
                                            name='shop'
                                            size='16' />
                                        <p className='basket__text'>В корзину</p>
                                    </div>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='product__case'>
                            <button className='product__compare'>
                                <Icons
                                    name='compare'
                                    size='20' />
                            </button>
                            <button className='product__star'>
                                <Icons
                                    name='star'
                                    size='20' />
                            </button>
                            <div className='product__camera'>
                                <img src={camer} alt="Camera" />
                                <h3 className='product__name'>PowerShot SX620 HS</h3>
                                <p className='product__model'>Canon</p>
                            </div>
                            <ul className='product__list'>
                                <li className='product__item'>
                                    <div className='product__price'>630&nbsp;Р</div>
                                    <div className='product__description'>Будний</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>750&nbsp;Р</div>
                                    <div className='product__description'>Выходной</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>4 380&nbsp;Р</div>
                                    <div className='product__description'>Неделя</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>12 250&nbsp;Р</div>
                                    <div className='product__description'>Месяц</div>
                                </li>
                            </ul>
                            <div className='product__btn'>
                                <Link className='product__info' to={':id'}>Подробнее</Link>
                                <button className='product__basket basket'>
                                    <div className='basket__case'>
                                        <Icons
                                            name='shop'
                                            size='16' />
                                        <p className='basket__text'>В корзину</p>
                                    </div>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='product__case'>
                            <button className='product__compare'>
                                <Icons
                                    name='compare'
                                    size='20' />
                            </button>
                            <button className='product__star'>
                                <Icons
                                    name='star'
                                    size='20' />
                            </button>
                            <div className='product__camera'>
                                <img src={camer} alt="Camera" />
                                <h3 className='product__name'>PowerShot SX620 HS</h3>
                                <p className='product__model'>Canon</p>
                            </div>
                            <ul className='product__list'>
                                <li className='product__item'>
                                    <div className='product__price'>630&nbsp;Р</div>
                                    <div className='product__description'>Будний</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>750&nbsp;Р</div>
                                    <div className='product__description'>Выходной</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>4 380&nbsp;Р</div>
                                    <div className='product__description'>Неделя</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>12 250&nbsp;Р</div>
                                    <div className='product__description'>Месяц</div>
                                </li>
                            </ul>
                            <div className='product__btn'>
                                <Link className='product__info' to={':id'}>Подробнее</Link>
                                <button className='product__basket basket'>
                                    <div className='basket__case'>
                                        <Icons
                                            name='shop'
                                            size='16' />
                                        <p className='basket__text'>В корзину</p>
                                    </div>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='product__case'>
                            <button className='product__compare'>
                                <Icons
                                    name='compare'
                                    size='20' />
                            </button>
                            <button className='product__star'>
                                <Icons
                                    name='star'
                                    size='20' />
                            </button>
                            <div className='product__camera'>
                                <img src={camer} alt="Camera" />
                                <h3 className='product__name'>PowerShot SX620 HS</h3>
                                <p className='product__model'>Canon</p>
                            </div>
                            <ul className='product__list'>
                                <li className='product__item'>
                                    <div className='product__price'>630&nbsp;Р</div>
                                    <div className='product__description'>Будний</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>750&nbsp;Р</div>
                                    <div className='product__description'>Выходной</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>4 380&nbsp;Р</div>
                                    <div className='product__description'>Неделя</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>12 250&nbsp;Р</div>
                                    <div className='product__description'>Месяц</div>
                                </li>
                            </ul>
                            <div className='product__btn'>
                                <Link className='product__info' to={':id'}>Подробнее</Link>
                                <button className='product__basket basket'>
                                    <div className='basket__case'>
                                        <Icons
                                            name='shop'
                                            size='16' />
                                        <p className='basket__text'>В корзину</p>
                                    </div>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='product__case'>
                            <button className='product__compare'>
                                <Icons
                                    name='compare'
                                    size='20' />
                            </button>
                            <button className='product__star'>
                                <Icons
                                    name='star'
                                    size='20' />
                            </button>
                            <div className='product__camera'>
                                <img src={camer} alt="Camera" />
                                <h3 className='product__name'>PowerShot SX620 HS</h3>
                                <p className='product__model'>Canon</p>
                            </div>
                            <ul className='product__list'>
                                <li className='product__item'>
                                    <div className='product__price'>630&nbsp;Р</div>
                                    <div className='product__description'>Будний</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>750&nbsp;Р</div>
                                    <div className='product__description'>Выходной</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>4 380&nbsp;Р</div>
                                    <div className='product__description'>Неделя</div>
                                </li>
                                <li className='product__item'>
                                    <div className='product__price'>12 250&nbsp;Р</div>
                                    <div className='product__description'>Месяц</div>
                                </li>
                            </ul>
                            <div className='product__btn'>
                                <Link className='product__info' to={':id'}>Подробнее</Link>
                                <button className='product__basket basket'>
                                    <div className='basket__case'>
                                        <Icons
                                            name='shop'
                                            size='16' />
                                        <p className='basket__text'>В корзину</p>
                                    </div>
                                </button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='main__search search'>
                <h2 className='search__title title'>Вы <span>ищете</span> что-то конкретное?</h2>
                <p className='search__desc'>Проект <span>Fotoprokat24</span> является агрегатором предложений всех фотопрокатов Москвы и служит для Вашего удобства. Выберете необходимую категорию, либо начните поиск по названию. Оформив заказ, Вы сможете забрать его из Пункта Выдачи, либо заказать доставку в любую точку Москвы.</p>
                <div className='search__btn'>
                    <Link className='search__catalog' to={'/catalog'}>Перейти в Каталог</Link>
                    <a className='search__link' href='#header'>Приступить к поиску</a>
                </div>
            </div>
            <div className='main__gallery gallery'>
                <div className='container'>
                    <ul className='gallery__container'>
                        <li className='gallery__item'>
                            <img src={photo1} alt="Photo1" />
                        </li>
                        <li className='gallery__item'>
                            <img src={photo2} alt="Photo2" />
                        </li>
                        <li className='gallery__item'>
                            <img src={photo3} alt="Photo3" />
                        </li>
                    </ul>
                    <ul className='gallery__container'>
                        <li className='gallery__item'>
                            <img src={photo4} alt="Photo4" />
                        </li>
                        <li className='gallery__item'>
                            <img src={photo5} alt="Photo5" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='main__earn earn'>
                <div className='container'>
                    <h2 className='earn__title title'><span>Зарабатывайте</span> вместе с нами</h2>
                    <p className='earn__desc'>Сдавайте свою технику через наш сервис, разместив её в каталоге, и получайте стабильную прибыль.</p>
                    <ul className='earn__list'>
                        <EarnItem name='dimond' text='Доступный способ инвестировать' size='32' />
                        <EarnItem name='calendar' text='Постоянный стабильный доход' size='32' />
                        <EarnItem name='umbrella' text='Гарантии сохранности техники' size='32' />
                        <EarnItem name='view' text='Прозрачные выплаты' size='32' />
                    </ul>
                    <button className='earn__btn'>Предложить свою технику</button>
                </div>
            </div>
            <div className='main__news news'>
                <div className='container'>
                    <h2 className='news__title title'><span>Новости</span> компании</h2>
                    <ul className='news__list'>
                        <li className='news__item'>
                            <div className='news__case'>
                                <div className='news__data'>7 апреля 2019</div>
                                <h3 className='news__caption'>Выбираем SD-карты для съемки</h3>
                                <p className='news__desc'>За исключением отсутствующей системы аэродинамического охлаждения, корпус этого ноутбука почти такой же.</p>
                            </div>
                            <img src={ph1} alt="IMG" />
                        </li>
                        <li className='news__item'>
                            <img src={ph2} alt="IMG" />
                            <div className='news__case'>
                                <div className='news__data'>7 апреля 2019</div>
                                <h3 className='news__caption'>Выбираем SD-карты для съемки</h3>
                                <p className='news__desc'>За исключением отсутствующей системы аэродинамического охлаждения, корпус этого ноутбука почти такой же.</p>
                            </div>
                        </li>
                        <li className='news__item'>
                            <div className='news__case'>
                                <div className='news__data'>7 апреля 2019</div>
                                <h3 className='news__caption'>Выбираем SD-карты для съемки</h3>
                                <p className='news__desc'>За исключением отсутствующей системы аэродинамического охлаждения, корпус этого ноутбука почти такой же.</p>
                            </div>
                            <img src={ph3} alt="IMG" />
                        </li>
                    </ul>
                    <Link className='news__link' to={'/news'}>Все новости</Link>
                </div>
            </div>
            <div className='main__map map'>
                <div className='container'>
                    <ul className='map__list'>
                        <MapItem title='Фотопрокат Zoom' desc='Малая Ордынка, 25' href='http://zoom-prokat.ru' />
                        <MapItem title='Rental Photo' desc='Киркорова, 180/1' href='http://rentalphoto.com' />
                        <MapItem title='Panasonic Company' desc='Малая Ордынка, 25' href='http://zoom-prokat.ru' />
                        <MapItem title='Торговый Центр' desc='Киркорова, 180/1' href='http://rentalphoto.com' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainPage