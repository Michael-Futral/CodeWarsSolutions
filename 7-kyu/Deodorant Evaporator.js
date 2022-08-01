function evaporator(content, evap_per_day, threshold, perc, day) {

    day = day || 1
    perc = perc || 100
    perc = perc - perc * (evap_per_day / 100)

    if (perc < threshold) { return day }

    return evaporator(content, evap_per_day, threshold, perc, ++day)
}