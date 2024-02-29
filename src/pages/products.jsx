import styled from "styled-components";
import FilterSection from "../components/FilterSection";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";
import { useFilterContext } from "../context/filter_context";

const Products = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
  }

  .grid-filter-column {
    flex: 0 0 20%; /* 20% width for the filter section */
    padding-right: 20px; /* Optional padding for spacing */
  }

  .product-view--sort {
    flex: 1; /* Take remaining space */
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three columns */
    gap: 3.2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      flex-direction: column;
    }

    .grid-filter-column {
      flex: 1; /* Full width for the filter section in mobile view */
      padding-right: 0; /* Remove padding for mobile view */
      margin-bottom: 20px; /* Optional margin for spacing */
    }

    .grid {
      grid-template-columns: 1fr; /* Single column for mobile view */
    }
  }
`;
export default Products;
