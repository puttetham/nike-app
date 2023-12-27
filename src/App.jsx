import { CustomerReviews, Footer, Hero, PopularProducts, SpecialOffer, Subscribe, Services, SuperQuality } from "./sections";
import Nav from "./components/nav";

const App = () => (
  <main className="relative">
    <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
            <Hero />
        </section>
        <section className="padding">
            <PopularProducts />
        </section>
        <section className="padding xl:my-20 overflow-x-hidden">
            <SuperQuality />
        </section>
        <section className="padding-x xl:py-10 my-32">
            <Services />
        </section>
        <section className="padding xl:my-20">
            <SpecialOffer />
        </section>
        <section className="padding bg-pale-blue dark:bg-black xl:my-20">
            <CustomerReviews />
        </section>
        <section className="padding padding-x sm:py-32 py-16 w-full xl:my-20">
            <Subscribe />
        </section>
        <section className="padding bg-black padding-x padding-t pb-8">
            <Footer />
        </section>
  </main>
)

export default App