import { useState } from "react";
import Select, { components } from "react-select";
import { AiOutlineBars } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { PiShoppingCartLight } from "react-icons/pi";
import img_shina from './shina.png'
import kolodka from './kolodka.png'
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

  return (
      <div style={{backgroundColor: '#FFF', maxWidth: '1133px', margin: '0px auto', marginTop: '40px'}}>
    <div className="page3__container" style={{display: 'flex', gap: '50px'}}>
    <div className="filter" style={{width: '170px'}}>
    <div className="button__temp" style={{
      borderRadius: '3.045px',
      // border: '1px solid rgba(134, 119, 119, 0.20)',
      // background: 'var(--White, #FFF)',
      marginBottom: '30px',
      gap: '10px'
    }}>
          <button style={{marginRight: '10px'}}><AiOutlineBars /></button>
          <button><HiBars3 /></button>
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
      <h3 style={{color: 'var(--Dark, #333)',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '100%'}}>Цена</h3>
      <div className="filter__div">
        <h1 style={{color: 'var(--Dark, #333)',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '100%'}}>Производитель</h1>
        <label style={{display: 'block'}}><input type="checkbox" name="terms" v-bind="field"/>DENSO</label>
        <label style={{display: 'block'}}><input type="checkbox" name="terms" v-bind="field"/>FEBI</label>
        <label style={{display: 'block'}}><input type="checkbox" name="terms" v-bind="field"/>NGK</label>
        <label style={{display: 'block'}}><input type="checkbox" name="terms" v-bind="field"/>NISSAN</label>
        <label style={{display: 'block'}}><input type="checkbox" name="terms" v-bind="field"/>RENAULT</label>
        <label style={{display: 'block'}}><input type="checkbox" name="terms" v-bind="field"/>VAG</label>
      </div>
      <div className="filter__div" style={{display: 'block'}}>
        <h1 style={{color: 'var(--Dark, #333)',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '100%'}}>Состяние</h1>
        <label style={{display: 'block'}}><input type="radio" name="terms" v-bind="field"/>Все</label>
        <label style={{display: 'block'}}><input type="radio" name="terms" v-bind="field"/>Новые</label>
        <label style={{display: 'block'}}><input type="radio" name="terms" v-bind="field"/>Б/у</label>
      </div>
      <div className="filter__div" style={{display: 'block'}}>
        <h1 style={{color: 'var(--Dark, #333)',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '100%'}}>Сортировать</h1>
        <label style={{display: 'block'}}><input type="radio" name="terms" v-bind="field"/>по дате объявления</label>
        <label style={{display: 'block'}}><input type="radio" name="terms" v-bind="field"/>по цене</label>
        <label style={{display: 'block'}}><input type="radio" name="terms" v-bind="field"/>по рейтингу</label>

        <label style={{display: 'block'}}><input type="checkbox" name="terms" v-bind="field"/>Только с фото</label>
        <label style={{display: 'block'}}><input type="checkbox" name="terms" v-bind="field"/>Доставка в бокс</label>
        <label style={{display: 'block'}}><input type="radio" name="terms" v-bind="field"/>В наличии</label>
        <label style={{display: 'block', marginBottom: '25px'}}><input type="radio" name="terms" v-bind="field"/>На заказ</label>
      </div>
      <div>X Сбросить фильтры</div>
    </div>
    <div className="products">
    <h1 style={{
        color: 'var(--Opacity-2, #867777)', 
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
      }}>Главная / Запчасти / Колодки тормозные дисковые</h1>
      <h2 style={{
        color: '#000',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal'
      }}>Колодки тормозные дисковые</h2>
      <div className="product" style={{
        // width: '651px',
        height: '150px',
        background: '#E9F7F7',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        
      }}>
        <div className="product__img"><img src={img_shina} alt="" /></div>
        <div className="product__body" style={{
        display: 'flex'}}>
          <div className="left" style={{marginLeft: '10px'}}>
            <h1 style={{
              color: '#000',
              fontSize: '18px',
              fontWeight: '700',
            }}>Шины зимние</h1>
            <h2 style={{
              color: 'var(--Opacity-2, #867777)',
              fontSize: '14px',
              fontWeight: '500',
            }}>б/у, 265/65/R17 <br />Зимние шипованные  265/65/R17 состояние новых шин </h2>
            <div style={{
              display: 'flex',
              gap: '30px',
              marginTop: '35px',
            }}>
              <div>Алматы</div>
              <div>22 сентября</div>
              <div>👁 22 просмотра</div>
            </div>
          </div>
          <div className="right">
            <div style={{
              color: 'var(--Dark, #333)',
              textAlign: 'right',
              fontSize: '18px',
              fontWeight: '700',
              marginTop: '15px',
              marginRight: '20px'
            }}>99 999 тг.</div>
            <div><button style={{
              display: 'inline-flex',
              padding: '10px 15px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '3px',
              background: '#1FAFAC',
              marginTop:'62px',
              marginLeft: '30px'
            }}><PiShoppingCartLight /></button></div>
          </div>
        </div>
      </div>
      {/* 1 */}
      <div className="product" style={{
        // width: '651px',
        height: '150px',
        background: '#E9F7F7',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        
      }}>
        <div className="product__img"><img src={img_shina} alt="" /></div>
        <div className="product__body" style={{
        display: 'flex'}}>
          <div className="left" style={{marginLeft: '10px'}}>
            <h1 style={{
              color: '#000',
              fontSize: '18px',
              fontWeight: '700',
            }}>Шины зимние</h1>
            <h2 style={{
              color: 'var(--Opacity-2, #867777)',
              fontSize: '14px',
              fontWeight: '500',
            }}>б/у, 265/65/R17 <br />Зимние шипованные  265/65/R17 состояние новых шин </h2>
            <div style={{
              display: 'flex',
              gap: '30px',
              marginTop: '35px',
            }}>
              <div>Алматы</div>
              <div>22 сентября</div>
              <div>👁 22 просмотра</div>
            </div>
          </div>
          <div className="right">
            <div style={{
              color: 'var(--Dark, #333)',
              textAlign: 'right',
              fontSize: '18px',
              fontWeight: '700',
              marginTop: '15px',
              marginRight: '20px'
            }}>99 999 тг.</div>
            <div><button style={{
              display: 'inline-flex',
              padding: '10px 15px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '3px',
              background: '#1FAFAC',
              marginTop:'62px',
              marginLeft: '30px'
            }}><PiShoppingCartLight /></button></div>
          </div>
        </div>
      </div>
      {/* /1 */}
      {/* 2 */}
      <div className="product" style={{
        // width: '651px',
        height: '150px',
        // background: '#E9F7F7',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-between',   
        marginBottom: '10px',     
      }}>
        <div className="product__img"><img src={img_shina} alt="" /></div>
        <div className="product__body" style={{
        display: 'flex'}}>
          <div className="left" style={{marginLeft: '10px'}}>
            <h1 style={{
              color: '#000',
              fontSize: '18px',
              fontWeight: '700',
            }}>Шины зимние</h1>
            <h2 style={{
              color: 'var(--Opacity-2, #867777)',
              fontSize: '14px',
              fontWeight: '500',
            }}>б/у, 265/65/R17 <br />Зимние шипованные  265/65/R17 состояние новых шин </h2>
            <div style={{
              display: 'flex',
              gap: '30px',
              marginTop: '35px',
            }}>
              <div>Алматы</div>
              <div>22 сентября</div>
              <div>👁 22 просмотра</div>
            </div>
          </div>
          <div className="right">
            <div style={{
              color: 'var(--Dark, #333)',
              textAlign: 'right',
              fontSize: '18px',
              fontWeight: '700',
              marginTop: '15px',
              marginRight: '20px'
            }}>99 999 тг.</div>
            <div><button style={{
              display: 'inline-flex',
              padding: '10px 15px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '3px',
              background: '#1FAFAC',
              marginTop:'62px',
              marginLeft: '30px'
            }}><PiShoppingCartLight /></button></div>
          </div>
        </div>
      </div>
      {/* /2 */}
      {/* 3 */}
      <div className="product" style={{
        // width: '651px',
        height: '150px',
        // background: '#E9F7F7',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
      }}>
        <div className="product__img"><img src={img_shina} alt="" /></div>
        <div className="product__body" style={{
        display: 'flex'}}>
          <div className="left" style={{marginLeft: '10px'}}>
            <h1 style={{
              color: '#000',
              fontSize: '18px',
              fontWeight: '700',
            }}>Шины зимние</h1>
            <h2 style={{
              color: 'var(--Opacity-2, #867777)',
              fontSize: '14px',
              fontWeight: '500',
            }}>б/у, 265/65/R17 <br />Зимние шипованные  265/65/R17 состояние новых шин </h2>
            <div style={{
              display: 'flex',
              gap: '30px',
              marginTop: '35px',
            }}>
              <div>Алматы</div>
              <div>22 сентября</div>
              <div>👁 22 просмотра</div>
            </div>
          </div>
          <div className="right">
            <div style={{
              color: 'var(--Dark, #333)',
              textAlign: 'right',
              fontSize: '18px',
              fontWeight: '700',
              marginTop: '15px',
              marginRight: '20px'
            }}>99 999 тг.</div>
            <div><button style={{
              display: 'inline-flex',
              padding: '10px 15px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '3px',
              background: '#1FAFAC',
              marginTop:'62px',
              marginLeft: '30px'
            }}><PiShoppingCartLight /></button></div>
          </div>
        </div>
      </div>
      {/* /3 */}
      {/* 4 */}
      <div className="product" style={{
        // width: '651px',
        height: '150px',
        // background: '#E9F7F7',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        
      }}>
        <div className="product__img"><img src={img_shina} alt="" /></div>
        <div className="product__body" style={{
        display: 'flex'}}>
          <div className="left" style={{marginLeft: '10px'}}>
            <h1 style={{
              color: '#000',
              fontSize: '18px',
              fontWeight: '700',
            }}>Шины зимние</h1>
            <h2 style={{
              color: 'var(--Opacity-2, #867777)',
              fontSize: '14px',
              fontWeight: '500',
            }}>б/у, 265/65/R17 <br />Зимние шипованные  265/65/R17 состояние новых шин </h2>
            <div style={{
              display: 'flex',
              gap: '30px',
              marginTop: '35px',
            }}>
              <div>Алматы</div>
              <div>22 сентября</div>
              <div>👁 22 просмотра</div>
            </div>
          </div>
          <div className="right">
            <div style={{
              color: 'var(--Dark, #333)',
              textAlign: 'right',
              fontSize: '18px',
              fontWeight: '700',
              marginTop: '15px',
              marginRight: '20px'
            }}>99 999 тг.</div>
            <div><button style={{
              display: 'inline-flex',
              padding: '10px 15px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '3px',
              background: '#1FAFAC',
              marginTop:'62px',
              marginLeft: '30px'
            }}><PiShoppingCartLight /></button></div>
          </div>
        </div>
      </div>
      {/* /4 */}
      {/* 5 */}
      <div className="product" style={{
        // width: '651px',
        height: '150px',
        // background: '#E9F7F7',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        
      }}>
        <div className="product__img"><img src={img_shina} alt="" /></div>
        <div className="product__body" style={{
        display: 'flex'}}>
          <div className="left" style={{marginLeft: '10px'}}>
            <h1 style={{
              color: '#000',
              fontSize: '18px',
              fontWeight: '700',
            }}>Шины зимние</h1>
            <h2 style={{
              color: 'var(--Opacity-2, #867777)',
              fontSize: '14px',
              fontWeight: '500',
            }}>б/у, 265/65/R17 <br />Зимние шипованные  265/65/R17 состояние новых шин </h2>
            <div style={{
              display: 'flex',
              gap: '30px',
              marginTop: '35px',
            }}>
              <div>Алматы</div>
              <div>22 сентября</div>
              <div>👁 22 просмотра</div>
            </div>
          </div>
          <div className="right">
            <div style={{
              color: 'var(--Dark, #333)',
              textAlign: 'right',
              fontSize: '18px',
              fontWeight: '700',
              marginTop: '15px',
              marginRight: '20px'
            }}>99 999 тг.</div>
            <div><button style={{
              display: 'inline-flex',
              padding: '10px 15px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '3px',
              background: '#1FAFAC',
              marginTop:'62px',
              marginLeft: '30px'
            }}><PiShoppingCartLight /></button></div>
          </div>
        </div>
      </div>
      {/* /5 */}
      {/* 6 */}
      <div className="product" style={{
        // width: '651px',
        height: '150px',
        // background: '#E9F7F7',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        
      }}>
        <div className="product__img"><img src={img_shina} alt="" /></div>
        <div className="product__body" style={{
        display: 'flex'}}>
          <div className="left" style={{marginLeft: '10px'}}>
            <h1 style={{
              color: '#000',
              fontSize: '18px',
              fontWeight: '700',
            }}>Шины зимние</h1>
            <h2 style={{
              color: 'var(--Opacity-2, #867777)',
              fontSize: '14px',
              fontWeight: '500',
            }}>б/у, 265/65/R17 <br />Зимние шипованные  265/65/R17 состояние новых шин </h2>
            <div style={{
              display: 'flex',
              gap: '30px',
              marginTop: '35px',
            }}>
              <div>Алматы</div>
              <div>22 сентября</div>
              <div>👁 22 просмотра</div>
            </div>
          </div>
          <div className="right">
            <div style={{
              color: 'var(--Dark, #333)',
              textAlign: 'right',
              fontSize: '18px',
              fontWeight: '700',
              marginTop: '15px',
              marginRight: '20px'
            }}>99 999 тг.</div>
            <div><button style={{
              display: 'inline-flex',
              padding: '10px 15px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '3px',
              background: '#1FAFAC',
              marginTop:'62px',
              marginLeft: '30px'
            }}><PiShoppingCartLight /></button></div>
          </div>
        </div>
      </div>
      {/* /6 */}
      {/* 7 */}
      <div className="product" style={{
        // width: '651px',
        height: '150px',
        // background: '#E9F7F7',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        
      }}>
        <div className="product__img"><img src={img_shina} alt="" /></div>
        <div className="product__body" style={{
        display: 'flex'}}>
          <div className="left" style={{marginLeft: '10px'}}>
            <h1 style={{
              color: '#000',
              fontSize: '18px',
              fontWeight: '700',
            }}>Шины зимние</h1>
            <h2 style={{
              color: 'var(--Opacity-2, #867777)',
              fontSize: '14px',
              fontWeight: '500',
            }}>б/у, 265/65/R17 <br />Зимние шипованные  265/65/R17 состояние новых шин </h2>
            <div style={{
              display: 'flex',
              gap: '30px',
              marginTop: '35px',
            }}>
              <div>Алматы</div>
              <div>22 сентября</div>
              <div>👁 22 просмотра</div>
            </div>
          </div>
          <div className="right">
            <div style={{
              color: 'var(--Dark, #333)',
              textAlign: 'right',
              fontSize: '18px',
              fontWeight: '700',
              marginTop: '15px',
              marginRight: '20px'
            }}>99 999 тг.</div>
            <div><button style={{
              display: 'inline-flex',
              padding: '10px 15px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '3px',
              background: '#1FAFAC',
              marginTop:'62px',
              marginLeft: '30px'
            }}><PiShoppingCartLight /></button></div>
          </div>
        </div>
      </div>
      {/* /7 */}
    </div>
    <div className="recommenations" style={{marginTop: '40px'}}>
      <h1 style={{
        color: 'var(--Dark, #333)',
        fontSize: '14px',
        fontWeight: '700',
        marginBottom: '20px',
        marginTop: '-37px'
      }}> 🔥 Горящие предложения недели</h1>
      <div className="recommendings">
        <div className="recommended" style={{
          // width: '239px',
          // height: '91px',
          background: 'rgba(31, 175, 172, 0.10)',
          display: 'flex',
          gap: '12px',
          padding: '10px',
          marginBottom: '20px'
        }}>
          <div className="recommended_img"><img  style={{}} src={kolodka} alt="" /></div>
          <div className="recommended_body">
            <h1 style={{
              color:' var(--Dark, #333)',
              fontSize: '12px',
              fontWeight: '700',
            }}>  Колодки тормозные дисковые</h1>
            <h2 style={{
              color: 'var(--Dark, #333)',
              fontSize: '12px',
              fontWeight: '500',
            }}>Toyota Camry</h2>
            <h3 style={{
              color: 'var(--Dark, #333)',
              fontSize: '15.167px',
              fontWeight: '700',
              lineHeight: 'normal'
            }}>99 999 тг.</h3>
          </div>
        </div>
        <div className="recommended" style={{
          // width: '239px',
          // height: '91px',
          background: 'rgba(31, 175, 172, 0.10)',
          display: 'flex',
          gap: '12px',
          padding: '10px',
          marginBottom: '20px'
        }}>
          <div className="recommended_img"><img  style={{}} src={kolodka} alt="" /></div>
          <div className="recommended_body">
            <h1 style={{
              color:' var(--Dark, #333)',
              fontSize: '12px',
              fontWeight: '700',
            }}>  Колодки тормозные дисковые</h1>
            <h2 style={{
              color: 'var(--Dark, #333)',
              fontSize: '12px',
              fontWeight: '500',
            }}>Toyota Camry</h2>
            <h3 style={{
              color: 'var(--Dark, #333)',
              fontSize: '15.167px',
              fontWeight: '700',
              lineHeight: 'normal'
            }}>99 999 тг.</h3>
          </div>
        </div>
        <div className="recommended" style={{
          // width: '239px',
          // height: '91px',
          background: 'rgba(31, 175, 172, 0.10)',
          display: 'flex',
          gap: '12px',
          padding: '10px',
          marginBottom: '20px'
        }}>
          <div className="recommended_img"><img  style={{}} src={kolodka} alt="" /></div>
          <div className="recommended_body">
            <h1 style={{
              color:' var(--Dark, #333)',
              fontSize: '12px',
              fontWeight: '700',
            }}>  Колодки тормозные дисковые</h1>
            <h2 style={{
              color: 'var(--Dark, #333)',
              fontSize: '12px',
              fontWeight: '500',
            }}>Toyota Camry</h2>
            <h3 style={{
              color: 'var(--Dark, #333)',
              fontSize: '15.167px',
              fontWeight: '700',
              lineHeight: 'normal'
            }}>99 999 тг.</h3>
          </div>
        </div>
        <div className="recommended" style={{
          // width: '239px',
          // height: '91px',
          background: 'rgba(31, 175, 172, 0.10)',
          display: 'flex',
          gap: '12px',
          padding: '10px',
          marginBottom: '20px'
        }}>
          <div className="recommended_img"><img  style={{}} src={kolodka} alt="" /></div>
          <div className="recommended_body">
            <h1 style={{
              color:' var(--Dark, #333)',
              fontSize: '12px',
              fontWeight: '700',
            }}>  Колодки тормозные дисковые</h1>
            <h2 style={{
              color: 'var(--Dark, #333)',
              fontSize: '12px',
              fontWeight: '500',
            }}>Toyota Camry</h2>
            <h3 style={{
              color: 'var(--Dark, #333)',
              fontSize: '15.167px',
              fontWeight: '700',
              lineHeight: 'normal'
            }}>99 999 тг.</h3>
          </div>
        </div>
        <div className="recommended" style={{
          // width: '239px',
          // height: '91px',
          background: 'rgba(31, 175, 172, 0.10)',
          display: 'flex',
          gap: '12px',
          padding: '10px',
          marginBottom: '20px'
        }}>
          <div className="recommended_img"><img  style={{}} src={kolodka} alt="" /></div>
          <div className="recommended_body">
            <h1 style={{
              color:' var(--Dark, #333)',
              fontSize: '12px',
              fontWeight: '700',
            }}>  Колодки тормозные дисковые</h1>
            <h2 style={{
              color: 'var(--Dark, #333)',
              fontSize: '12px',
              fontWeight: '500',
            }}>Toyota Camry</h2>
            <h3 style={{
              color: 'var(--Dark, #333)',
              fontSize: '15.167px',
              fontWeight: '700',
              lineHeight: 'normal'
            }}>99 999 тг.</h3>
          </div>
        </div>
        <div className="recommended" style={{
          // width: '239px',
          // height: '91px',
          background: 'rgba(31, 175, 172, 0.10)',
          display: 'flex',
          gap: '12px',
          padding: '10px',
          marginBottom: '20px'
        }}>
          <div className="recommended_img"><img  style={{}} src={kolodka} alt="" /></div>
          <div className="recommended_body">
            <h1 style={{
              color:' var(--Dark, #333)',
              fontSize: '12px',
              fontWeight: '700',
            }}>  Колодки тормозные дисковые</h1>
            <h2 style={{
              color: 'var(--Dark, #333)',
              fontSize: '12px',
              fontWeight: '500',
            }}>Toyota Camry</h2>
            <h3 style={{
              color: 'var(--Dark, #333)',
              fontSize: '15.167px',
              fontWeight: '700',
              lineHeight: 'normal'
            }}>99 999 тг.</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
