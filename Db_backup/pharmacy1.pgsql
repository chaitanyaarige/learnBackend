--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3 (Ubuntu 12.3-1.pgdg18.04+1)
-- Dumped by pg_dump version 12.3 (Ubuntu 12.3-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: drugs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.drugs (
    id SERIAL PRIMARY KEY,
    serial_number character varying(255) NOT NULL,
    drug_name character varying(255) NOT NULL,
    box_price double precision,
    supplier character varying,
    inventory character varying,
    discount double precision
);

CREATE TABLE public.categories (
    id SERIAL PRIMARY KEY,
    serial_number character varying(255) NOT NULL,
    category_name character varying(255) NOT NULL,
    CONSTRAINT fk_drug_id FOREIGN KEY (id) REFERENCES drugs (id)
);

ALTER TABLE public.drugs OWNER TO postgres;

--
-- Data for Name: drugs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.drugs (id, serial_number, drug_name, box_price, supplier, inventory, discount) FROM stdin;
1	MD-123	Paracetemol	100	Glenn Marc	1000	0
\.


--
-- Name: drugs drugs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drugs
    ADD CONSTRAINT drugs_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

