export default function GxProduct() {
  const base = `${import.meta.env.BASE_URL}images/configurator/`;
  return <div className="gx-product">
    <img className="gx-product-pump" src={`${base}pump.webp`} alt="Pompa GX ze sterownikiem PLUVI" draggable={false} />
  </div>;
}
