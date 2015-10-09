class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    lower_lat_bound = bounds["southWest"]["lat"]
    upper_lat_bound = bounds["northEast"]["lat"]

    lower_lng_bound = bounds["southWest"]["lng"]
    upper_lng_bound = bounds["northEast"]["lng"]

    Bench.all().where(lat > lower_lat_bound AND lat < upper_lat_bound
                      AND lng > lower_lng_bound AND lng < upper_lng_bound)
  end
end
