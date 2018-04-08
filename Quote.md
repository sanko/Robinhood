# Quotes

- [Gather Quote Data for Multiple Ticker Symbols in a Single API Call](#gather-quote-data-for-multiple-ticker-symbols-in-a-single-api-call)
- [TODO](#)

The `/quotes` relative path is a directory that contains information relevant current and historical data on a particular security. It has the `historicals` sub-directory which is described below.

**Notes**

* Quotes are provided by Robinhood without requiring login information.
 

# TODO

- Get Historical Quotes

    GET /quotes/historicals/$symbol/[?interval=$i&span=$s&bounds=$b]
        interval=week|day|10minute|5minute|null(all)
        span=day|week|year|5year|all
        bounds=extended|regular|trading
        
- Get Historical Quotes for several symbols at once

    GET /quotes/historicals/?symbols=$csv_symbols&interval=$i[&span=$s&bounds=$b]
        interval=week|day|10minute|5minute
        span=day(default)|week|year|5year|all
        bounds=extended|regular|trading(default)

    Up to 75 symbols at once.
 