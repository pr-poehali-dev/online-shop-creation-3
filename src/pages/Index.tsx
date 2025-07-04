import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const categories = [
    {
      name: "Одежда",
      icon: "Shirt",
      color: "bg-coral",
      count: "1000+ товаров",
    },
    {
      name: "Электроника",
      icon: "Smartphone",
      color: "bg-turquoise",
      count: "500+ товаров",
    },
    {
      name: "Спорт",
      icon: "Dumbbell",
      color: "bg-yellow",
      count: "800+ товаров",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Беспроводные наушники",
      price: "4 990",
      category: "Электроника",
      image: "/img/028b6b82-19df-4778-9c73-48196156ac7f.jpg",
    },
    {
      id: 2,
      name: "Спортивные кроссовки",
      price: "8 500",
      category: "Спорт",
      image: "/img/f3f80b11-36de-4827-ac91-e5c659025df1.jpg",
    },
    {
      id: 3,
      name: "Футболка Oversize",
      price: "2 300",
      category: "Одежда",
      image: "/img/028b6b82-19df-4778-9c73-48196156ac7f.jpg",
    },
    {
      id: 4,
      name: "Смартфон Pro Max",
      price: "89 990",
      category: "Электроника",
      image: "/img/f3f80b11-36de-4827-ac91-e5c659025df1.jpg",
    },
  ];

  const features = [
    {
      icon: "Truck",
      title: "Быстрая доставка",
      desc: "От 1 дня по всей России",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      desc: "Возврат в течение 30 дней",
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      desc: "Карта, наличные, рассрочка",
    },
    {
      icon: "HeartHandshake",
      title: "Поддержка 24/7",
      desc: "Всегда готовы помочь",
    },
  ];

  const reviews = [
    {
      name: "Анна К.",
      rating: 5,
      text: "Отличный магазин! Быстрая доставка и качественные товары.",
    },
    {
      name: "Михаил Р.",
      rating: 5,
      text: "Заказываю уже второй раз. Всё приходит вовремя и в отличном состоянии.",
    },
    {
      name: "Елена С.",
      rating: 4,
      text: "Хорошие цены и широкий ассортимент. Рекомендую!",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center">
                <Icon name="Store" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-heading font-bold text-gray-900">
                VIBRANT
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                Главная
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                Товары
              </a>
              <a
                href="#delivery"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                Доставка
              </a>
              <a
                href="#payment"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                Оплата
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                О нас
              </a>
              <a
                href="#reviews"
                className="text-gray-700 hover:text-coral transition-colors"
              >
                Отзывы
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Search" size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Icon name="ShoppingCart" size={18} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-coral">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-coral/10 via-turquoise/5 to-yellow/10 py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            Яркий стиль для
            <span className="text-coral"> активной жизни</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Одежда, электроника и спорттовары для тех, кто ценит качество и
            стиль
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-coral hover:bg-coral/90 text-white font-semibold px-8"
            >
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center mb-12">
            Популярные категории
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      name={category.icon}
                      size={28}
                      className="text-white"
                    />
                  </div>
                  <h4 className="text-xl font-heading font-semibold mb-2">
                    {category.name}
                  </h4>
                  <p className="text-gray-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center mb-12">
            Хиты продаж
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <h4 className="font-semibold mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-coral">
                      {product.price} ₽
                    </span>
                    <Button
                      size="sm"
                      className="bg-turquoise hover:bg-turquoise/90"
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="delivery"
        className="py-16 bg-gradient-to-r from-turquoise/10 to-blue/10"
      >
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center mb-12">
            Почему выбирают нас
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <h4 className="text-lg font-heading font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-heading font-bold mb-8">
              Способы оплаты
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <Icon
                  name="CreditCard"
                  size={32}
                  className="text-blue mx-auto mb-4"
                />
                <h4 className="font-semibold mb-2">Банковская карта</h4>
                <p className="text-gray-600 text-sm">Visa, Mastercard, МИР</p>
              </Card>
              <Card className="p-6">
                <Icon
                  name="Wallet"
                  size={32}
                  className="text-yellow mx-auto mb-4"
                />
                <h4 className="font-semibold mb-2">Электронные кошельки</h4>
                <p className="text-gray-600 text-sm">
                  Apple Pay, Google Pay, SberPay
                </p>
              </Card>
              <Card className="p-6">
                <Icon
                  name="Banknote"
                  size={32}
                  className="text-coral mx-auto mb-4"
                />
                <h4 className="font-semibold mb-2">При получении</h4>
                <p className="text-gray-600 text-sm">
                  Наличные или картой курьеру
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-heading font-bold mb-8">О нас</h3>
            <p className="text-lg text-gray-700 mb-8">
              VIBRANT — это современный интернет-магазин, который объединяет
              лучшие товары для активной жизни. Мы предлагаем качественную
              одежду, новейшую электронику и спортивное оборудование для тех,
              кто ценит стиль и функциональность.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-coral mb-2">5000+</div>
                <p className="text-gray-600">Довольных клиентов</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-turquoise mb-2">3</div>
                <p className="text-gray-600">Года на рынке</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow mb-2">2000+</div>
                <p className="text-gray-600">Товаров в каталоге</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center mb-12">
            Отзывы клиентов
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className="text-yellow fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center">
                  <Icon name="Store" size={20} className="text-white" />
                </div>
                <h1 className="text-xl font-heading font-bold">VIBRANT</h1>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Яркий стиль для активной жизни
              </p>
              <div className="flex space-x-4">
                <Icon
                  name="Instagram"
                  size={20}
                  className="text-gray-400 hover:text-coral cursor-pointer"
                />
                <Icon
                  name="Facebook"
                  size={20}
                  className="text-gray-400 hover:text-coral cursor-pointer"
                />
                <Icon
                  name="Twitter"
                  size={20}
                  className="text-gray-400 hover:text-coral cursor-pointer"
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-coral">
                    Одежда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral">
                    Электроника
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral">
                    Спорт
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral">
                    Акции
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-coral">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-coral">
                    Гарантия
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+7 (999) 123-45-67</p>
                <p>info@vibrant.ru</p>
                <p>Работаем 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 VIBRANT. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
