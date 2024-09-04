# Changing the Number of Cross-Validation Folds

Space Voyager, now it's time to apply cross-validation with a different number of folds and change another important feature. Change the `cv` parameter in `cross_val_score` to `10` and also update the `n_estimators` parameter in the `GradientBoostingRegressor` to `200`. After that, can you spot how it changes the model performance and our predictions?

Let's do it!