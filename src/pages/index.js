import ButtonLink from '../components/ButtonLink';
import React from 'react';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

import alexPa from '../assets/features/alex_pa.jpg';
import valePa from '../assets/features/vale_pa.jpg';

const Index = () => (
  <Layout>
    {/* Main section */}
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            5K dia del padre 2021!
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Carrera anual del dia del padre para todas las familias! Despues de la carrera habra
            tambien un desayuno en el restaurante favorito de los papas.
          </p>
          <p className="mt-8 md:mt-12">
            <ButtonLink size="lg" href="mailto:aluramh@gmail.com?subject=5K dia del padre 2021">
              Inscribete ahora!
            </ButtonLink>
          </p>
          <p className="mt-4 text-gray-600">Ya inscrito no hay vuelta atras</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>

    {/* Lugar */}
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Lugar</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">¿Donde es la carrera?</p>
              <p className="mt-4">
                Parque rio la silla. Esq. Av Del Cortijo, Camino del Rio, Residencial La Hacienda,
                64890 Monterrey, N.L.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Dia del padre 2019</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">Lookin' good!</p>
        </div>
      }
      secondarySlot={<img src={alexPa} />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Dia del padre 2019</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">Cruzando la meta como campeones</p>
        </div>
      }
      secondarySlot={<img src={valePa} />}
    />

    {/* Estadisticas */}
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">UNA CARRERA DEL DIA DEL PADRE TE TRAERÁ</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="De felicidad de convivir con la familia" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox
              primaryText="+90%"
              secondaryText="De satisfaccion de haberte ejercitado un domingo mañanero"
            />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox
              primaryText="+80%"
              secondaryText="Un estomago mas vacio para el desayuno despues de la carrera"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Testimonios */}
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">
          Lo que dicen los competidores
        </LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pitch */}
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center text-gray-900">
      <h3 className="text-5xl font-semibold">Listo para inscribirte?</h3>
      <p className="mt-8 text-xl font-light">
        No dejes que la flojera te gane. Date un respiro este dia del padre.
      </p>
      <p className="mt-8">
        <ButtonLink size="xl" href="mailto:aluramh@gmail.com?subject=5K dia del padre 2021">
          Registrate ahora
        </ButtonLink>
      </p>
    </section>
  </Layout>
);

export default Index;
