UPDATE public.staff_members SET image_url = '/cms-assets/arif.jpg' WHERE name = 'Arif Mohammed';
UPDATE public.staff_members SET image_url = '/cms-assets/sichale.jpg' WHERE name = 'Sichale Idosa';
UPDATE public.staff_members SET image_url = '/cms-assets/shelema.jpg' WHERE name = 'Shelema Ketema';
UPDATE public.staff_members SET image_url = '/cms-assets/mahlet.jpg' WHERE name = 'Mahlet Zeleke';
INSERT INTO public.staff_members (name, role, section, sort_order, image_url)
SELECT 'Getachew Tadesse', 'Chemistry Teacher', 'management', 100, '/cms-assets/getachew.jpg'
WHERE NOT EXISTS (SELECT 1 FROM public.staff_members WHERE name = 'Getachew Tadesse');