def calculate_retirement_benefits(birth_year, monthly_benefit_at_fra, desired_retirement_age):
    """
    Calculate retirement benefits based on birth year and desired retirement age
    
    Parameters:
    birth_year (int): Year of birth
    monthly_benefit_at_fra (float): Estimated monthly benefit at full retirement age
    desired_retirement_age (float): Age when you want to start benefits (62-70)
    
    Returns:
    dict: Retirement analysis including FRA, monthly benefit, and lifetime benefits
    """
    # Define Full Retirement Age (FRA) based on birth year
    fra_mapping = {
        range(1943, 1955): (66, 0),  # 66 years, 0 months
        range(1955, 1956): (66, 2),  # 66 years, 2 months
        range(1956, 1957): (66, 4),  # 66 years, 4 months
        range(1957, 1958): (66, 6),  # 66 years, 6 months
        range(1958, 1959): (66, 8),  # 66 years, 8 months
        range(1959, 1960): (66, 10), # 66 years, 10 months
        range(1960, 2000): (67, 0)   # 67 years, 0 months
    }
    
    # Find FRA for given birth year
    fra_years = 0
    fra_months = 0
    for year_range, (years, months) in fra_mapping.items():
        if birth_year in year_range:
            fra_years = years
            fra_months = months
            break
    
    fra_decimal = fra_years + (fra_months / 12)
    
    # Calculate benefit adjustment
    if desired_retirement_age < fra_decimal:
        # Reduced benefits for early retirement
        if desired_retirement_age < 62:
            raise ValueError("Cannot claim benefits before age 62")
        reduction_months = (fra_decimal - desired_retirement_age) * 12
        
        # First 36 months: 5/9 of 1% per month reduction
        first_reduction = min(36, reduction_months) * (5/9) * 0.01
        # Additional months: 5/12 of 1% per month reduction
        additional_reduction = max(0, reduction_months - 36) * (5/12) * 0.01
        
        total_reduction = first_reduction + additional_reduction
        benefit_multiplier = 1 - total_reduction
        
    else:
        # Increased benefits for delayed retirement
        if desired_retirement_age > 70:
            raise ValueError("No additional benefits increase after age 70")
        delay_months = (desired_retirement_age - fra_decimal) * 12
        # 8% annual increase for delayed retirement
        benefit_multiplier = 1 + (delay_months * (8/12) * 0.01)
    
    monthly_benefit = monthly_benefit_at_fra * benefit_multiplier
    
    # Calculate lifetime benefits to age 85 (rough estimate)
    years_collecting = 85 - desired_retirement_age
    lifetime_benefits = monthly_benefit * 12 * years_collecting
    
    return {
        "full_retirement_age": f"{fra_years} years, {fra_months} months",
        "monthly_benefit": round(monthly_benefit, 2),
        "lifetime_benefits_to_85": round(lifetime_benefits, 2),
        "benefit_multiplier": round(benefit_multiplier * 100, 1)
    }