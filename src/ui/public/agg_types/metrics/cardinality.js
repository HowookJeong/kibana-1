import { AggTypesMetricsMetricAggTypeProvider } from 'ui/agg_types/metrics/metric_agg_type';
import { fieldFormats } from 'ui/registry/field_formats';

export function AggTypesMetricsCardinalityProvider(Private) {
  const MetricAggType = Private(AggTypesMetricsMetricAggTypeProvider);


  return new MetricAggType({
    name: 'cardinality',
    title: 'Unique Count',
    makeLabel: function (aggConfig) {
      return 'Unique count of ' + aggConfig.getFieldDisplayName();
    },
    getFormat: function () {
      return fieldFormats.getDefaultInstance('number');
    },
    params: [
      {
        name: 'field'
      }
    ]
  });
}
