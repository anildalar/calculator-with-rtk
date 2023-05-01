import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux';
import '../i18n';
import { selectCount, value } from '../features/calculator/calculatorSlice';

//This is our page 2
export default function Page2() {
  //2.2 Hooks area
  //const count = useSelector((state) => state.counter.value)
  const { t } = useTranslation();
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
        <h1>Calculator Design Using HTML Layout</h1>
        <div className="container">
            <div className="header">{ t('calculator') }</div>
            <input type="text" value={ count } className="result" />
            <div className="first-row">
              <input type="button" name defaultValue="√" className="global" />
              <input type="button" name defaultValue="(" className="global" />
              <input type="button" name defaultValue=")" className="global" />
              <input type="button" name defaultValue="%" className="global" />
            </div>
            <div className="second-row">
              <input type="button" name defaultValue={t('nine')} onClick={()=>{dispatch(value(9))}} className="global" />
              <input type="button" name defaultValue={8} className="global" />
              <input type="button" name defaultValue={9} className="global" />
              <input type="button" name defaultValue="/" className="global" />
            </div>
            <div className="third-row">
              <input type="button" name defaultValue={9} className="global" />
              <input type="button" name defaultValue={9} className="global" />
              <input type="button" name defaultValue={9} className="global" />
              <input type="button" name defaultValue="X" className="global" />
            </div>
            <div className="fourth-row">
              <input type="button" name defaultValue={t('one')} className="global" />
              <input type="button" name defaultValue={2} className="global" />
              <input type="button" name defaultValue={3} className="global" />
              <input type="button" name defaultValue="-" className="global" />
            </div>
            <div className="conflict">
            <div className="left">
                <input type="button" name defaultValue={0} className=" big" />
                <input type="button" name defaultValue="." className=" small" />
                <input type="button" name defaultValue="Del" className=" red small white-text top-margin" />
                <input type="button" name defaultValue="=" className=" green white-text big top-margin" />
            </div>
            <div className="right">
                <input type="button" name defaultValue="+" className="global grey plus" />
            </div>
            </div>
        </div>
    </>
  )
}
