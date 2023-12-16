import { useContext, useState } from "react";
import Select, { components } from "react-select";
import Products from "./Products";
import "./Page3.css"
import { ContextData } from "../../context/ContextFile";
import Recommendence from "./Recommendence";
import Cards from "../page2/Page2";
const InputOption = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  // styles
  let bg = "transparent";
  if (isFocused) bg = "#eee";
  if (isActive) bg = "#B2D4FF";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex "
  };

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input type="checkbox" checked={isSelected} />
      {children}
    </components.Option>
  );
};

const allOptions = [
  { value: "Алматы", label: "Алматы" },
  { value: "Доставка из других регионов", label: "Доставка из других регионов" },
];

export default function Page3() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { cardTable, setCardTable, } = useContext(ContextData)
  return (
    <div style={{ backgroundColor: '#FFF', maxWidth: '1133px', margin: '0px auto', marginTop: '40px' }}>
      <div className="page3__container" style={{ display: 'flex', gap: '50px' }}>
        <div className="filter" style={{ width: '170px' }}>
          <div className="button__temp" style={{
            borderRadius: '3.045px',
            marginBottom: '30px',
            gap: '10px'
          }}>
            <button onClick={() => setCardTable(!cardTable)} style={{ marginRight: '10px', border: "none", outline: "none" }}>{cardTable ? <img src="./public/img/bars1.jpg" alt="rasm" /> : <img src="./public/img/bars2.png" alt="rasm" />}</button>
          </div>
          <Select
            defaultValue={[]}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            onChange={(options) => {
              if (Array.isArray(options)) {
                setSelectedOptions(options.map((opt) => opt.value));
              }
            }}
            options={allOptions}
            components={{
              Option: InputOption
            }}
          />
          <h3 style={{
            color: 'var(--Dark, #333)',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '100%'
          }}>Цена</h3>
          <div className="filter__div">
            <h1 style={{
              color: 'var(--Dark, #333)',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '100%'
            }}>Производитель</h1>
            <label style={{ display: 'block' }}><input type="checkbox" name="terms" v-bind="field" />DENSO</label>
            <label style={{ display: 'block' }}><input type="checkbox" name="terms" v-bind="field" />FEBI</label>
            <label style={{ display: 'block' }}><input type="checkbox" name="terms" v-bind="field" />NGK</label>
            <label style={{ display: 'block' }}><input type="checkbox" name="terms" v-bind="field" />NISSAN</label>
            <label style={{ display: 'block' }}><input type="checkbox" name="terms" v-bind="field" />RENAULT</label>
            <label style={{ display: 'block' }}><input type="checkbox" name="terms" v-bind="field" />VAG</label>
          </div>
          <div className="filter__div" style={{ display: 'block' }}>
            <h1 style={{
              color: 'var(--Dark, #333)',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '100%'
            }}>Состяние</h1>
            <label style={{ display: 'block' }}><input type="radio" name="terms" v-bind="field" />Все</label>
            <label style={{ display: 'block' }}><input type="radio" name="terms" v-bind="field" />Новые</label>
            <label style={{ display: 'block' }}><input type="radio" name="terms" v-bind="field" />Б/у</label>
          </div>
          <div className="filter__div" style={{ display: 'block' }}>
            <h1 style={{
              color: 'var(--Dark, #333)',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '100%'
            }}>Сортировать</h1>
            <label style={{ display: 'block' }}><input type="radio" name="terms" v-bind="field" />по дате объявления</label>
            <label style={{ display: 'block' }}><input type="radio" name="terms" v-bind="field" />по цене</label>
            <label style={{ display: 'block' }}><input type="radio" name="terms" v-bind="field" />по рейтингу</label>

            <label style={{ display: 'block' }}><input type="checkbox" name="terms" v-bind="field" />Только с фото</label>
            <label style={{ display: 'block' }}><input type="checkbox" name="terms" v-bind="field" />Доставка в бокс</label>
            <label style={{ display: 'block' }}><input type="radio" name="terms" v-bind="field" />В наличии</label>
            <label style={{ display: 'block', marginBottom: '25px' }}><input type="radio" name="terms" v-bind="field" />На заказ</label>
          </div>
          <div>X Сбросить фильтры</div>
        </div>
        {
          cardTable ? <><Products />  <Recommendence /></> : <Cards />
        }

      </div>
    </div>
  );
}
