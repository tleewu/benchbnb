class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(params)
    lower_lat_bound = params["bounds"]["southWest"]["lat"]
    upper_lat_bound = params["bounds"]["northEast"]["lat"]

    lower_lng_bound = params["bounds"]["southWest"]["lng"]
    upper_lng_bound = params["bounds"]["northEast"]["lng"]

    Bench.where("lat > " + lower_lat_bound + " AND lat < " + upper_lat_bound +
                " AND lng > " + lower_lng_bound + " AND lng < " + upper_lng_bound)
  end
end
