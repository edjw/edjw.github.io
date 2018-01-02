---
title: How often is 1st January a Monday?
date: 2018-01-02 00:00:00 +0000
---
Yesterday, 1st January 2018 was a Monday. In my mind, Monday is the first day of the week. Some people think it's Sunday. I don't understand those people.

Anyway, it made me wonder...How often the first day of the week is the first day of the year? And how many years will we have to wait until the first day of the year is a Monday again?

I wrote some [bad, repetitive Python code](#that-bad-repetitive-python) to work this out. I also some made bad, repetitive use of the [Plotly Python Library](https://plot.ly/python/) to make some bar charts.

# From the year 1AD to 2018

| Day of week | Times 1st Jan has been X day | Avg years to wait |
| --- | :---: | :---: |
| Monday | 283 | 7.15 |
| Tuesday | 293 | 6.89 |
| Wednesday | 287 | 7.03 |
| Thursday | 288 | 7.01 |
| Friday | 292 | 6.89 |
| Saturday | 282 | 7.14 |
| Sunday | 293 | 6.89 |

![](/uploads/2018/01/02/first_jan_mon_2018.png)![](/uploads/2018/01/02/mean_wait_2018.png)

# From the year 1AD to 9999

Just to test that a bit further I tried it from 1AD to the year 9999 as well. (9999 is the maximum year Python has in its standard library.) The results are almost exactly the same.

| Day of week | Times 1st Jan has been X day | Avg years to wait |
| --- | :---: | :---: |
| Monday | 1400 | 7.14 |
| Tuesday | 1450 | 6.89 |
| Wednesday | 1425 | 7.02 |
| Thursday | 1425 | 7.02 |
| Friday | 1450 | 6.89 |
| Saturday | 1399 | 7.15 |
| Sunday | 1450 | 6.89 |

![](/uploads/2018/01/02/first_jan_mon_9999.png)


# That bad, repetitive Python

    from datetime import datetime
    from statistics import mean
    import plotly
    import plotly.graph_objs as go
    
    year = int(datetime.today().strftime("%Y"))  # 2018 at the moment
    # year = 9999 # the latest year you can use
    
    
    def get_first_jan_weekdays(year):
    
        mondays = []  # "2018, 2007, 2001"
        tuesdays = []
        wednesdays = []
        thursdays = []
        fridays = []
        saturdays = []
        sundays = []
    
        while year >= 1:
    
            day_of_week_first_jan = datetime(year, 1, 1).strftime("%A")
    
            if day_of_week_first_jan == 'Monday':
                mondays.append(year)
            elif day_of_week_first_jan == 'Tuesday':
                tuesdays.append(year)
            elif day_of_week_first_jan == 'Wednesday':
                wednesdays.append(year)
            elif day_of_week_first_jan == 'Thursday':
                thursdays.append(year)
            elif day_of_week_first_jan == 'Friday':
                fridays.append(year)
            elif day_of_week_first_jan == 'Saturday':
                saturdays.append(year)
            elif day_of_week_first_jan == 'Sunday':
                sundays.append(year)
    
            year -= 1
    
        return mondays, tuesdays, wednesdays, thursdays, fridays, saturdays, sundays
    
    
    def get_number_of_first_jan_weekdays(mondays, tuesdays, wednesdays, thursdays, fridays, saturdays, sundays):
        total_mondays = len(mondays)
        total_tuesdays = len(tuesdays)
        total_wednesdays = len(wednesdays)
        total_thursdays = len(thursdays)
        total_fridays = len(fridays)
        total_saturdays = len(saturdays)
        total_sundays = len(sundays)
    
        return total_mondays, total_tuesdays, total_wednesdays, total_thursdays, total_fridays, total_saturdays, total_sundays
    
    
    def get_avg_wait_between_years(mondays, tuesdays, wednesdays, thursdays, fridays, saturdays, sundays):
        mon_waits = [s - t for s, t in zip(mondays, mondays[1:])]  # 1st num minus 2nd num
        mon_avg_wait = round(mean(mon_waits), 2)  # mean difference rounded to 2 decimal places
    
        tues_waits = [s - t for s, t in zip(tuesdays, tuesdays[1:])]
        tues_avg_wait = round(mean(tues_waits), 2)
    
        wed_waits = [s - t for s, t in zip(wednesdays, wednesdays[1:])]
        wed_avg_wait = round(mean(wed_waits), 2)
    
        thurs_waits = [s - t for s, t in zip(thursdays, thursdays[1:])]
        thurs_avg_wait = round(mean(thurs_waits), 2)
    
        fri_waits = [s - t for s, t in zip(fridays, fridays[1:])]
        fri_avg_wait = round(mean(fri_waits), 2)
    
        sat_waits = [s - t for s, t in zip(saturdays, saturdays[1:])]
        sat_avg_wait = round(mean(sat_waits), 2)
    
        sun_waits = [s - t for s, t in zip(sundays, sundays[1:])]
        sun_avg_wait = round(mean(sun_waits), 2)
    
        return mon_avg_wait, tues_avg_wait, wed_avg_wait, thurs_avg_wait, fri_avg_wait, sat_avg_wait, sun_avg_wait
    
    
    def generate_totals_bar_chart(*args):
        y_axis_data = []
        for arg in args:
            y_axis_data.append(arg)
    
        data = [go.Bar(
                x=["Mondays", "Tuesdays", "Wednesdays",
                    "Thursday", "Fridays", "Saturdays", "Sundays"],
                y=y_axis_data
                )]
    
        layout = go.Layout(
            title="How often is 1st January a Monday? From the year 1 to 9999",
    
            xaxis=dict(
                title="Days of the week"
            ),
            yaxis=dict(
                title="Number of times 1st January has been X day",
                range=[1350, 1460]
            ),
    
        )
    
        plotly.offline.plot({"data": data, "layout": layout})
    
    
    def generate_avgs_barchart(*args):
        y_axis_data = []
        for arg in args:
            y_axis_data.append(arg)
    
        data = [go.Bar(
                x=["Mondays", "Tuesdays", "Wednesdays",
                    "Thursday", "Fridays", "Saturdays", "Sundays"],
                y=y_axis_data
                )]
    
        layout = go.Layout(
            title="If 1st January is a Monday, how many years until it's a Monday again? From the year 1 to 2018",
    
            xaxis=dict(
                title="Days of the week"
            ),
            yaxis=dict(
                title="Average (mean) years to wait",
                range=[6.5, 7.5]
            ),
    
        )
    
        plotly.offline.plot({"data": data, "layout": layout})
    
    
    mondays, tuesdays, wednesdays, thursdays, fridays, saturdays, sundays = get_first_jan_weekdays(
        year)
    
    total_mondays, total_tuesdays, total_wednesdays, total_thursdays, total_fridays, total_saturdays, total_sundays = get_number_of_first_jan_weekdays(
        mondays, tuesdays, wednesdays, thursdays, fridays, saturdays, sundays)
    
    mon_avg_wait, tues_avg_wait, wed_avg_wait, thurs_avg_wait, fri_avg_wait, sat_avg_wait, sun_avg_wait = get_avg_wait_between_years(mondays, tuesdays, wednesdays, thursdays, fridays, saturdays, sundays)
    
    generate_totals_bar_chart(total_mondays, total_tuesdays, total_wednesdays, total_thursdays, total_fridays, total_saturdays, total_sundays)
    
    generate_avgs_barchart(mon_avg_wait, tues_avg_wait, wed_avg_wait, thurs_avg_wait, fri_avg_wait, sat_avg_wait, sun_avg_wait)