import { NavBar, DatePicker } from 'antd-mobile'

import './index.scss'
import { useMemo, useState, useEffect } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const Month = () => {
    //按月做数据的分组

    const billList = useSelector(state => state.bill.billList);
    const monthGroup = useMemo(() => {
        //return计算后的值
        return _.groupBy(billList, (item) => dayjs(item.date).format("YYYY-MM"))
    }, [billList])
    console.log(monthGroup)

    const [dateVisible, setDateVisible] = useState(false)

    //控制时间显示的状态
    const [currentDate, setCurrentDate] = useState(() => {
        return dayjs(new Date()).format('YYYY-MM')
    })

    const [currentMonthList, setCurrentMonthList] = useState([])

    //计算 支出、收入、结余
    const monthResult = useMemo(() => {
        const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
        const income = currentMonthList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)
        const total = income + pay
        return {
            pay, 
            income, 
            total
        }
    }, [currentMonthList]) 

    //确认回调
    const onConfirm = (date) => {
        setDateVisible(false)
        setCurrentMonthList(monthGroup[dayjs(date).format('YYYY-MM')])
        setCurrentDate(dayjs(date).format('YYYY-MM'))
    }

    //初始化当前月的统计数据显示出来
    useEffect(() => {
        //边界值的控制
        if(monthGroup[dayjs(new Date()).format("YYYY-MM")]) {
            setCurrentMonthList(monthGroup[dayjs(new Date()).format("YYYY-MM")]) 
        }
    }, [monthGroup])

    return (
        <div className="monthlyBill">
        <NavBar className="nav" backArrow={false}>
            月度收支
        </NavBar>
        <div className="content">
            <div className="header">
            {/* 时间切换区域 */}
            <div className="date">
                <span className="text" onClick={() => setDateVisible(true)}>
                 {currentDate + ''}月账单
                </span>
                {/* 思路：根据当前弹框打开的状态控制expand类名是否存在 */}
                <span className={classNames("arrow", dateVisible && 'expand')}></span>
            </div>
            {/* 统计区域 */}
            <div className='twoLineOverview'>
                <div className="item">
                    <span className="money">{monthResult.pay.toFixed(2)}</span>
                    <span className="type">支出</span>
                </div>
                <div className="item">
                    <span className="money">{monthResult.income.toFixed(2)}</span>
                    <span className="type">收入</span>
                </div>
                <div className="item">
                    <span className="money">{monthResult.total.toFixed(2)}</span>
                    <span className="type">结余</span>
                </div>
            </div>
            {/* 时间选择器 */}
            <DatePicker
                className="kaDate"
                title="记账日期"
                precision="month"
                visible={dateVisible}
                onCancel={() => setDateVisible(false)}
                onConfirm={onConfirm}
                onClose={() => setDateVisible(false)}
                max={new Date()}
            />
            </div>
            {/* 单日列表统计 */}


            </div>
        </div >
    )
}

export default Month